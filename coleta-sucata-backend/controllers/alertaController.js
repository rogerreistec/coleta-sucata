// controllers/alertaController.js
const db = require('../db');

// Função para criar um alerta
exports.createAlerta = async (req, res) => {
    const { mensagem, tipo } = req.body;
    try {
        const result = await db.query(
            'INSERT INTO alerta (mensagem, tipo) VALUES ($1, $2) RETURNING *',
            [mensagem, tipo]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Função para listar todos os alertas
exports.getAlertas = async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM alerta');
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
