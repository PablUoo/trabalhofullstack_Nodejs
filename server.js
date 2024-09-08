const express = require('express');
const rotas = require('./routes');

const app = express();

app.use(express.json());
app.use('/', rotas);

app.get('/home', (req, res) => {
    res.send('Desenvolvido por Pablo Aurelio Melo Almeida');
});

app.listen(3000, () => console.log(`http://localhost:3000`));