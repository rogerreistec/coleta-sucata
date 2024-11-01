const express = require('express');
const router = express.Router();

router.get('/dados', (req, res) => {
  // Lógica para recuperar os dados do banco de dados ou de outra fonte
  const dados = [
    { id: 1, nome: 'João', idade: 25 },
    { id: 2, nome: 'Maria', idade: 30 },
    { id: 3, nome: 'Pedro', idade: 35 },
  ];
  res.json(dados);
});

module.exports = router;