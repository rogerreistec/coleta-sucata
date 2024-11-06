const Coletor = require('../models/coletor'); // Modelo de Coletor
const PontoColeta = require('../models/pontoColeta'); // Modelo de Ponto de Coleta
const Alerta = require('../models/alerta'); // Modelo de Alerta

// Função para criar um coletor
const cadastrarColetor = async (data) => {
  try {
    const coletor = new Coletor(data);
    await coletor.save();
    return coletor;
  } catch (error) {
    throw error;
  }
};

// Função para criar um ponto de coleta
const cadastrarPontoColeta = async (data) => {
  try {
    const pontoColeta = new PontoColeta(data);
    await pontoColeta.save();
    return pontoColeta;
  } catch (error) {
    throw error;
  }
};

// Função para gerar alertas
const gerarAlerta = async (data) => {
  try {
    const alerta = new Alerta(data);
    await alerta.save();
    return alerta;
  } catch (error) {
    throw error;
  }
};

module.exports = { cadastrarColetor, cadastrarPontoColeta, gerarAlerta };
