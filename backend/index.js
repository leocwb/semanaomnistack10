const express = require('express');

const app = express();

app.use(express.json());

//Métodos HTTP: GET(Listar), POST(Criar), PUT(Alterar), DELETE(Deletar)

//Tipos de parâmetros: 

//Query Params: req.query (Filtros, ordenação, paginação, ...)
//Route Params: req.params (Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro)

//MongoDB (Não-relacional)

app.post('/users/:id', (request, response) => {
  console.log(request.body);
  return response.json({ message: 'Seja bem vindo!'});
});
app.listen(3333);