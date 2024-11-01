// routes/coletores.js
const express = require('express');
const router = express.Router();

// Defina as rotas para os coletores aqui
router.get('/', (req, res) => {
  res.send('Rota para coletores');
});

module.exports = router;