const db = require('./db');
async function seed() {
    // Funções para inserir dados nos diferentes tabelas do banco de dados
    await insertColetores();
    await insertPontosColeta();
    await insertAlertas();
  }
  
  async function insertColetores() {
    // Inserir dados na tabela de coletores
    const coletores = [
      { nome: 'João', email: 'joao@example.com', telefone: '123456789' },
      { nome: 'Maria', email: 'maria@example.com', telefone: '987654321' },
    ];
    for (const coletor of coletores) {
      const query = {
        text: 'INSERT INTO coletor (nome, email, telefone) VALUES ($1, $2, $3) RETURNING *',
        values: [coletor.nome, coletor.email, coletor.telefone],
      };
      await db.query(query);
    }
    console.log('Coletor inserido com sucesso!');
  }
  
  async function insertPontosColeta() {
    // Inserir dados na tabela de pontos de coleta
    const pontosColeta = [
      { nome: 'Ponto de Coleta 1', endereco: 'Rua 1, 123', telefone: '123456789' },
      { nome: 'Ponto de Coleta 2', endereco: 'Rua 2, 456', telefone: '987654321' },
    ];
    for (const pontoColeta of pontosColeta) {
      const query = {
        text: 'INSERT INTO ponto_coleta (nome, endereco, telefone) VALUES ($1, $2, $3) RETURNING *',
        values: [pontoColeta.nome, pontoColeta.endereco, pontoColeta.telefone],
      };
      await db.query(query);
    }
    console.log('Ponto de coleta inserido com sucesso!');
  }
  
  async function insertAlertas() {
    // Inserir dados na tabela de alertas
    const alertas = [
      { mensagem: 'Alerta 1', data: '2023-03-01', hora: '12:00' },
      { mensagem: 'Alerta 2', data: '2023-03-02', hora: '13:00' },
    ];
    for (const alerta of alertas) {
      const query = {
        text: 'INSERT INTO alerta (mensagem, data, hora) VALUES ($1, $2, $3) RETURNING *',
        values: [alerta.mensagem, alerta.data, alerta.hora],
      };
      await db.query(query);
    }
    console.log('Alerta inserido com sucesso!');
  }
  
  seed();