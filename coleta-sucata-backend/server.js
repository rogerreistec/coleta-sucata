const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./db'); // Importando a conexão com o banco de dados
const routes = require('./routes'); // Importando as rotas

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware para analisar o corpo das requisições como JSON
app.use(bodyParser.json());

// Usar as rotas definidas no arquivo routes.js
app.use('/api', routes); // Prefixo '/api' para todas as rotas

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

