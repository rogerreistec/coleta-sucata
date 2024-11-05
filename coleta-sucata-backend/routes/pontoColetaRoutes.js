// routes/pontoColetaRoutes.js
const express = require('express');
const router = express.Router();
const pontoColetaController = require('../controllers/pontoColetaController');

// Rota para cadastrar um ponto de coleta
router.post('/', pontoColetaController.createPontoColeta);

// Rota para listar todos os pontos de coleta
router.get('/', pontoColetaController.getPontosColeta);

module.exports = router;
