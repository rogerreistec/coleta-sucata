const { Pool } = require('pg');

const pool = new Pool({
  user: 'cosu10',       // Seu usuário do PostgreSQL
  host: 'localhost',      // Endereço do servidor PostgreSQL
  database: 'coleta_sucata', // O nome do seu banco de dados
  password: 'Naoseinao2025',  // A senha do usuário do banco
  port: 5432,             // Porta do PostgreSQL (geralmente 5432)
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Erro ao conectar ao banco de dados', err);
  }
  console.log('Conexão com o banco de dados estabelecida!');


});

