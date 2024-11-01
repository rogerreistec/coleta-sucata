const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/coletores', async (req, res) => {
  try {
    const coletores = await db.query('SELECT * FROM coletor');
    res.json(coletores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar coletor' });
  }
});

router.get('/pontos-coleta', async (req, res) => {
  try {
    const pontosColeta = await db.query('SELECT * FROM ponto_coleta');
    res.json(pontosColeta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar ponto de coleta' });
  }
});

router.get('/alertas', async (req, res) => {
  try {
    const alertas = await db.query('SELECT * FROM alertas');
    res.json(alertas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar alerta' });
  }
});

module.exports = router;