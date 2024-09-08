const { Pessoa } = require('../models');

exports.create = async (req, res) => {
    try {
      const pessoa = await Pessoa.create(req.body);
      return res.status(201).json(pessoa);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao criar pessoa', details: error });
    }
  };
  
  exports.findAll = async (req, res) => {
    try {
      const pessoas = await Pessoa.findAll();
      return res.status(200).json(pessoas);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar pessoas', details: error });
    }
  };
  
  exports.findOne = async (req, res) => {
    try {
      const pessoa = await Pessoa.findByPk(req.params.id);
      if (!pessoa) {
        return res.status(404).json({ error: 'Pessoa não encontrada' });
      }
      return res.status(200).json(pessoa);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar pessoa', details: error });
    }
  };
  
  exports.update = async (req, res) => {
    try {
      const pessoa = await Pessoa.findByPk(req.params.id);
      if (!pessoa) {
        return res.status(404).json({ error: 'Pessoa não encontrada' });
      }
      await pessoa.update(req.body);
      return res.status(200).json(pessoa);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao atualizar pessoa', details: error });
    }
  };
  
  exports.delete = async (req, res) => {
    try {
      const pessoa = await Pessoa.findByPk(req.params.id);
      if (!pessoa) {
        return res.status(404).json({ error: 'Pessoa não encontrada' });
      }
      await pessoa.destroy();
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao deletar pessoa', details: error });
    }
  };