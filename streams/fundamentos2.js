// process.stdin  stream de leitura
//  .pipe(process.stdout); stream de escrita
// O método pipe() é utilizado para conectar streams de leitura com streams de escrita.

// Criando uma stream de leitura
import { Readable, Writable, Transform } from "node:stream";

export class OneHundredStream extends Readable {
  index = 1;
  _read() {
    // Este método é responsável por retornar os dados da stream
    const i = this.index++;
    setTimeout(() => {
      // neste setTimeout, a cada 1 segundo, um número é enviado para a stream
      if (i > 100) {
        this.push(null); // método push() é utilizado para enviar dados para a stream
      } else {
        const buf = Buffer.from(String(i) + " "); // Buffer não aceita números, então é necessário converter para string
        return this.push(buf);
      }
    }, 1000);
  }
}

// Criando uma stream de escrita
export class MultiplyByTen extends Writable {
  // Writable é uma stream de escrita
  _write(chunk, encoding, callback) {
    // Este método é responsável por receber os dados da stream
    console.log(Number(chunk.toString()) * 10); // Em streams de leitura e escrita, não é possível modificar o dado diretamente
    callback();
  }
}

export class InverseNumber extends Transform {
  // Transform é uma stream de transformação
  _transform(chunk, encoding, callback) {
    // Este método é responsável por transformar os dados da stream
    const transformed = Number(chunk.toString()) * -1;

    callback(null, Buffer.from(String(transformed))); // Buffer é uma forma de enviar dados para a stream
  }
}

new OneHundredStream() // Cria uma stream de leitura, que só consigo ler dados
  .pipe(new InverseNumber()) // Cria uma stream de transformação, que consigo ler dados de algum lugar e escrever dados para outro lugar
  .pipe(new MultiplyByTen()); // Cria uma stream de escrita, que só consigo escrever dados

// Portanto, com o uso de streams é possível ler e escrever dados de forma contínua, sem a necessidade de carregar todos os arquivos na memória.
