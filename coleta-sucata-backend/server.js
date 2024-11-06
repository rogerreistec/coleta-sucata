const express = require('express');
const cors = require('cors');
const coletorRoutes = require('./src/routes/coletorRoutes');
const pontoColetaRoutes = require('./src/routes/pontoColetaRoutes');
const alertaRoutes = require('./src/routes/alertaRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuração do CORS para permitir apenas requisições de http://localhost:4200
app.use(cors({
  origin: 'http://localhost:4200', // Aqui, você pode colocar o endereço do seu frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Configuração para ler JSON no body das requisições
app.use(express.json()); // express.json() já faz o trabalho de body-parser

// Rotas
app.use('/api/coletores', coletorRoutes);
app.use('/api/pontos-coleta', pontoColetaRoutes);
app.use('/api/alertas', alertaRoutes);

// Verificar se CORS está sendo aplicado corretamente
app.use((req, res, next) => {
  console.log('CORS middleware chamado');
  next();
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
