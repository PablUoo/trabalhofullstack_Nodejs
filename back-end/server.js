const express = require('express');
const cors = require('cors');
const rotas = require('./routes');

const app = express();

// altere o front do ip 127.0.0.1 para localhost quando for subir o index em um go-live
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());
app.use('/', rotas);

app.get('/home', (req, res) => {
    res.send('Desenvolvido por Pablo Aurelio Melo Almeida');
});

app.listen(3000, () => console.log(`http://localhost:3000`));