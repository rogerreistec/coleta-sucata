// controllers/coletorController.js
const db = require('../db');

// Função para criar um coletor
exports.createColetor = async (req, res) => {
    const { nome, telefone, email } = req.body;
    try {
        const result = await db.query(
            'INSERT INTO coletor (nome, telefone, email) VALUES ($1, $2, $3) RETURNING *',
            [nome, telefone, email]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Função para listar todos os coletores
exports.getColetores = async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM coletor');
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
