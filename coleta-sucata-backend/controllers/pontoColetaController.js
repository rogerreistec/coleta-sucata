const db = require('../db');

// Função para criar um ponto de coleta
exports.createPontoColeta = async (req, res) => {
    const { nome_empresa, endereco, telefone_contato, email_contato } = req.body;
    try {
        const result = await db.query(
            'INSERT INTO ponto_coleta (nome_empresa, endereco, telefone_contato, email_contato) VALUES ($1, $2, $3, $4) RETURNING *',
            [nome_empresa, endereco, telefone_contato, email_contato]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Função para listar todos os pontos de coleta
exports.getPontosColeta = async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM ponto_coleta');
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
