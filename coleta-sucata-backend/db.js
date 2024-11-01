const { Pool } = require('pg');

const db = new Pool({
  host: 'localhost',
  user: 'Roger',
  password: 'Sonhos123',
  database: 'coleta_sucata',
});

module.exports = db;