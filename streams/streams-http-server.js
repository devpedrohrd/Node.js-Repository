import http from "node:http";
import { Transform } from "node:stream";

export class InverseNumber extends Transform {
  // Transform é uma stream de transformação
  _transform(chunk, encoding, callback) {
    // Este método é responsável por transformar os dados da stream
    const transformed = Number(chunk.toString()) * -1;
    console.log(transformed);
    callback(null, Buffer.from(String(transformed))); // Buffer é uma forma de enviar dados para a stream
  }
}

// res => ReadableStream -> consigo ler dados da minha requisição
// req => WritableStream -> consigo escrever dados para a minha resposta

const server = http.createServer((req, res) => {
  req.pipe(new InverseNumber()).pipe(res);
});

server.listen(8000, () => {
  console.log("Server is listening on port 8000");
});
