const express = require('express');
const pessoaController = require('./controller/PessoaController');

const router = express.Router();

router.post('/pessoas', pessoaController.create);       
router.get('/pessoas', pessoaController.findAll);
router.get('/pessoas/:id', pessoaController.findOne);
router.put('/pessoas/:id', pessoaController.update);
router.delete('/pessoas/:id', pessoaController.delete);

module.exports = router;