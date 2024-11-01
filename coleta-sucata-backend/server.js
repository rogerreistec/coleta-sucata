const express = require('express');
const cors = require('cors');
const coletorRoutes = require('./routes/coletores');
const dadosRoute = require('./routes/dados.route');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/coletores', coletorRoutes);
app.use('/api', dadosRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});