const express = require('express');
const app = express();
const PORT = 3000;

// Rota Principal
app.get('/', (req, res) => {

    res.send('Bem vindo ao Site Marvel e DC');

});

app.get('/marvel', (req, res) => {

    res.send('Este é o universo de heróis da  Marvel');

});

app.get('/dc', (req, res) => {

    res.send('Este é o universo de heróis da DC');

});


//Inicia o Servidor
app.listen(PORT, () => {

    console.log(`Servidor rodando em http://localhost:${PORT}`);

});