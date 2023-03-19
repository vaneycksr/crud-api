const express = require('express');
const router = require('./router')

// app usa o express para lidar com as requisicoes
const app = express();

// necessario para API trabalhar com dados em json
app.use(express.json());

// o app vai redirecionar para o arquivo de rotas
app.use(router);

module.exports = app;