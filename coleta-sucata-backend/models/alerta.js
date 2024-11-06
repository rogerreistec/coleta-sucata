const { DataTypes } = require('sequelize');
const db = require('../db');  // Seu arquivo de conexão com o banco

const Alerta = db.define('Alerta', {
  tipo_alerta: {
    type: DataTypes.STRING(50),
    allowNull: false,
    validate: {
      isIn: [['material_liberado', 'material_aguardando']]
    }
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  mensagem: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  data_criacao: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'alerta',
  timestamps: false
});

module.exports = Alerta;
