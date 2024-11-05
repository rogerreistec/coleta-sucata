const express = require('express');
const router = express.Router();
const coletorController = require('../controllers/coletorController');

// Rota para criar um novo coletor
router.post('/', coletorController.createColetor);

// Rota para listar todos os coletores
router.get('/', coletorController.getColetores);

module.exports = router;
