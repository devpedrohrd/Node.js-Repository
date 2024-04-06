import http from 'node:http';

/*
* -http => METODO RESPONSAVEL POR ESTABELACER CONEXÃO ENTRE O SERVIDOR E O CLIENTE
*   - metodo => get, post, put, delete
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

const server = http.createServer((req, res) => {
  if(req.method === 'GET' && req.uri === '/users') {
    return res.end('GET /users');
  }

    if(req.method === 'POST' && req.uri === '/users') {
        return res.end('POST /users');
    }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});