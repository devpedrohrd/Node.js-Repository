// process.stdin  stream de leitura
//  .pipe(process.stdout); stream de escrita
// O método pipe() é utilizado para conectar streams de leitura com streams de escrita.

// Criando uma stream de leitura
import { Readable } from "node:stream";

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

new OneHundredStream().pipe(process.stdout); // Nessa stream eu estou printando no console dados de dentro da stream mesmo que ela esteja completa

// Portanto, com o uso de streams é possível ler e escrever dados de forma contínua, sem a necessidade de carregar todos os arquivos na memória.
