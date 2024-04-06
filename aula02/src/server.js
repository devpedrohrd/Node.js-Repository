// HTTP Status Code => São códigos de status que indicam o resultado da solicitação HTTP.
// 200 - OK => A solicitação foi bem-sucedida.
// 201 - Created => A solicitação foi bem-sucedida e um novo recurso foi criado como resultado. Utilizado em rotas de criação (POST)
// 202 - Accepted => A solicitação foi aceita para processamento, mas o processamento ainda não foi concluído.
// 204 - No Content => A solicitação foi bem-sucedida, mas não há conteúdo a ser retornado.
// 400 - Bad Request => A solicitação é inválida ou incorreta.
// 401 - Unauthorized => A solicitação não foi aplicada porque não possui credenciais de autenticação válidas para o recurso de destino.
// 403 - Forbidden => A solicitação foi válida, mas o servidor está se recusando a responder a ela.
// 404 - Not Found => O recurso solicitado não foi encontrado.
// 500 - Internal Server Error => O servidor encontrou uma situação inesperada que o impediu de atender à solicitação.

import express from 'express';

const app = express();

const users = [{nome: 'Lucas', idade: 23, job: 'Desenvolvedor'}, {nome: 'João', idade: 25, job: 'Desenvolvedor'}, {nome: 'Maria', idade: 30, job: 'Desenvolvedor'}];

app.get('/users', (req, res) => {
  res.status(200).send(users); // Enviando a lista de usuários
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id; // Pegando o id passado na URL
    const user = users[id];

    if (!user) {
        res.status(404).send({message: 'Usuário não encontrado'});
        return;
    }

    res.status(200).send(user); // Enviando o usuário encontrado
});


app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});