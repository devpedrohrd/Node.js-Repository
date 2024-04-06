import http from 'node:http';

/*
* -http => MÉTODO RESPONSÁVEL POR ESTABELECER CONEXÃO ENTRE O SERVIDOR E O CLIENTE
*   - método => get, post, put, delete
*   - url => http://localhost:3000
* */

// GET => usado para buscar recursos no servidor
// POST => usado para enviar/criar recursos para o servidor
// PUT => usado para atualizar recurso no servidor
// PATCH => usado para atualizar recurso específico no servidor
// DELETE => usado para deletar informações no servidor
// HEAD => usado para pegar informações do cabeçalho
// OPTIONS => usado para pegar informações de métodos disponíveis

// AS ROTAS IRÃO SE DIVERGIR PELA SOMA DO METODO HTTP E URL

// GET/users => buscar todos os usuários
// POST/users => criar um novo usuário

// Aplicações statefull => armazenam informações do usuário mo servidor
// Aplicações stateless => não armazenam informações do usuário no servidor

// JSON => JavaScript Object Notation - É um formato de dados que é legível para humanos e
// fácil de interpretar para máquinas que é baseado em texto e usado para transmitir objetos

// JSON.stringify => converte um objeto JavaScript em uma string JSON
// JSON.parse => converte uma string JSON em um objeto JavaScript

// Cabeçalhos (Requisições/ Respostas) => metadados que contem informações sobre como a mensagem deve ser tratada

const users = [];

const server = http.createServer((req, res) => {
  if(req.method === 'GET' && req.url === `/users`) {
    return res
        .setHeader('Content-Type', 'application/json') // setHeader => define o cabeçalho da resposta
        .end(JSON.stringify(users)) // end => finaliza a resposta
  }

    if(req.method === 'POST' && req.url === '/users') {
          users.push({
          id :1,
          nome: `Pedro`,
          email: `pedro@gmail.com`
        })
    res.end(`Criação de usuario`)
    }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});