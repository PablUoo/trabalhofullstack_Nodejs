'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoa extends Model {
    static associate(models) {
    }
  }
  Pessoa.init({
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    telefone: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Pessoa',
  });
  return Pessoa;
};