import { Readable } from "node:stream";

export class OneHundredStream extends Readable {
  index = 1;
  _read() {
    const i = this.index++;
    setTimeout(() => {
      if (i > 100) {
        this.push(null);
      } else {
        const buf = Buffer.from(String(i) + " ");
        return this.push(buf);
      }
    }, 1000);
  }
}

// Enviando dados para o servidor através de uma requisição POST com o método fetch
fetch("http://localhost:8001", {
  method: "POST",
  body: new OneHundredStream(),
}).then((res) => res.body.pipeTo(new WritableStream()));
