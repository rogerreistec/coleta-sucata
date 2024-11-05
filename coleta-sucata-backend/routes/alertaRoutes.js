// routes/alertaRoutes.js
const express = require('express');
const router = express.Router();
const alertaController = require('../controllers/alertaController');

// Rota para criar um alerta
router.post('/', alertaController.createAlerta);

// Rota para listar todos os alertas
router.get('/', alertaController.getAlertas);

module.exports = router;
