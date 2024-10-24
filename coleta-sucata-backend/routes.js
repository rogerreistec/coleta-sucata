const express = require('express');
const router = express.Router();
const pool = require('./db'); // Importando a conexão com o banco de dados

// Rota para cadastrar coletores
router.post('/coletores', async (req, res) => {
  const { nome, telefone, email } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO coletores (nome, telefone, email) VALUES ($1, $2, $3) RETURNING *',
      [nome, telefone, email]
    );
    res.status(201).json(result.rows[0]); // Retorna o coletor recém-criado
  } catch (error) {
    console.error('Erro ao cadastrar coletores', error);
    res.status(500).json({ error: 'Erro ao cadastrar coletores' });
  }
});

// Adicione outras rotas conforme necessário
// Exemplo: Rota para listar coletores
router.get('/coletores', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM coletores');
    res.status(200).json(result.rows); // Retorna todos os coletores
  } catch (error) {
    console.error('Erro ao obter coletores', error);
    res.status(500).json({ error: 'Erro ao obter coletores' });
  }
});

module.exports = router; // Exporta o router

