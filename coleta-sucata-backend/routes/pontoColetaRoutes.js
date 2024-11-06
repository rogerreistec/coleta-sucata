const express = require('express');
const router = express.Router();
const pontoColetaController = require('../controllers/pontoColetaController'); // Verifique o caminho

// Rota para criar um novo ponto de coleta
router.post('/', pontoColetaController.createPontoColeta);

// Rota para listar todos os pontos de coleta
router.get('/', pontoColetaController.getPontosColeta);

module.exports = router;
