const express = require('express');
const router = express.Router();
const alertaController = require('../controllers/alertaController'); // Verifique o caminho

// Rota para criar um novo alerta
router.post('/', alertaController.createAlerta);

// Rota para listar todos os alertas
router.get('/', alertaController.getAlertas);

module.exports = router;
