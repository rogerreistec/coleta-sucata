const Coletor = require('../models/coletor'); // Modelo de Coletor
const PontoColeta = require('../models/pontoColeta'); // Modelo de Ponto de Coleta
const Alerta = require('../models/alerta'); // Modelo de Alerta

// Função para criar um coletor
const cadastrarColetor = async (data) => {
  try {
    const coletor = await Coletor.create(data); // Use 'create' diretamente, sem 'new'
    return coletor;
  } catch (error) {
    throw error;
  }
};

// Função para criar um ponto de coleta
const cadastrarPontoColeta = async (data) => {
  try {
    const pontoColeta = await PontoColeta.create(data); // Use 'create' diretamente
    return pontoColeta;
  } catch (error) {
    throw error;
  }
};

const gerarAlerta = async (data) => {
  try {
    const alerta = await Alerta.create({
      tipo_alerta: data.tipo_alerta,  // Certifique-se de que está usando tipo_alerta
      descricao: data.descricao,
      mensagem: data.mensagem
    });
    return alerta;
  } catch (error) {
    throw error;
  }
};

module.exports = { cadastrarColetor, cadastrarPontoColeta, gerarAlerta };


module.exports = { cadastrarColetor, cadastrarPontoColeta, gerarAlerta };
