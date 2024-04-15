// Buffers são usados para armazenar dados temporários
// enquanto estão sendo transferidos de um lugar para outro.
// Eles são usados para armazenar dados antes de serem enviados para um processo.
// Criado para suprir uma necessidade do Js que era trabalhar com dados binários.
// E ele é uma forma nativa de ler e escrever dados na memória do computador.

const buf = Buffer.from("Hello World"); // Transforma a string em um buffer

console.log(buf); // Exibe o buffer

console.log(buf.toJSON()); // Transforma o buffer em um objeto JSON
console.log(buf.toString()); // Transforma o buffer em uma string
