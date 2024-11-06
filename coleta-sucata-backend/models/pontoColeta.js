const db = require('../db');

const PontoColeta = {
    async create({ nome_empresa, endereco, telefone_contato, email_contato }) {
        try {
            const result = await db.query(
                'INSERT INTO ponto_coleta (nome_empresa, endereco, telefone_contato, email_contato) VALUES ($1, $2, $3, $4) RETURNING *',
                [nome_empresa, endereco, telefone_contato, email_contato]
            );
            return result.rows[0];
        } catch (err) {
            throw new Error(err.message);
        }
    },

    async getAll() {
        try {
            const result = await db.query('SELECT * FROM ponto_coleta');
            return result.rows;
        } catch (err) {
            throw new Error(err.message);
        }
    }
};

module.exports = PontoColeta;
