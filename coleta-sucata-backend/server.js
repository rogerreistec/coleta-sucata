// server.js
const express = require('express');
const bodyParser = require('body-parser');
const coletorRoutes = require('./routes/coletorRoutes');
const pontoColetaRoutes = require('./routes/pontoColetaRoutes');
const alertaRoutes = require('./routes/alertaRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Rotas
app.use('/api/coletores', coletorRoutes);
app.use('/api/pontos-coleta', pontoColetaRoutes);
app.use('/api/alertas', alertaRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
