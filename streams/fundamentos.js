// Streams no Node => São objetos que permitem ler dados de um recurso ou escrever dados em um recurso de forma contínua.

// Importação de clientes via CSV (EXCEL)

// Digamos que esse arquivo tenha 1 milhão de linhas, se tentarmos ler ele de uma vez, o servidor pode travar por falta de memória.

// Com o streams, podemos ler o arquivo de forma assíncrona, sem a necessidade de carregar todos os arquivos na memória.

// Enquanto o arquivo é lido/processado, ele é dividido em pedaços (chunks) e esses pedaços são processados conforme são lidos.

// Readable Streams => São streams de leitura, ou seja, streams que permitem ler dados de um recurso.
// Exemplo: Arquivos, requisições HTTP, etc. => O backend recebe dados do frontend de forma contínua.

// Writable Streams => São streams de escrita, ou seja, streams que permitem escrever dados em um recurso.
// Exemplo: Netflix,Spotify, Youtube, etc. => O backend envia dados para o frontend de forma contínua.
