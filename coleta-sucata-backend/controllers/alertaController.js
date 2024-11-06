const db = require('../db');

// Função para criar um alerta
exports.createAlerta = async (req, res) => {
    const { tipo_alerta, descricao, mensagem } = req.body;
    try {
        const result = await db.query(
            'INSERT INTO alerta (tipo_alerta, descricao, mensagem) VALUES ($1, $2, $3) RETURNING *',
            [tipo_alerta, descricao, mensagem]
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
