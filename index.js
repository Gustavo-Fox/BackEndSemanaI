const express = require('express');
const app = express();
const PORT = 3000;

// Rota Principal
app.get('/', (req, res) => {

    res.send(`
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
      <meta charset="UTF-8">
      <title>Catálogo de Heróis</title>
    </head>
    <body>
      <h1>Catálogo de Heróis</h1>
      <p>Bem-vindo ao nosso catálogo de heróis da Marvel e DC!</p>

      <h2>Empresas</h2>
      <ul>
        <li><a href="/marvel">Marvel</a></li>
        <li><a href="/dc">DC</a></li>
      </ul>

      <hr>

      <h2>Personagens</h2>
      <ul>
        <li><a href="/personagem/marvel/Thor">Thor (Marvel)</a></li>
        <li><a href="/personagem/marvel/Homem-Aranha">Homem-Aranha (Marvel)</a></li>
        <li><a href="/personagem/dc/Batman">Batman (DC)</a></li>
        <li><a href="/personagem/dc/Superman">Superman (DC)</a></li>
      </ul>
    </body>
    </html>
  `);

});
//Marvel
app.get('/marvel', (req, res) => {

    res.send(`
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
      <meta charset="UTF-8">
      <title>Marvel</title>
    </head>
    <body>
      <h1>Marvel</h1>
      <p>A Marvel Comics é uma das maiores editoras de histórias em quadrinhos do mundo, conhecida por heróis como Homem-Aranha, Thor, Homem de Ferro e muitos outros.</p>

      <h2>Personagens disponíveis</h2>
      <ul>
        <li><a href="/personagem/marvel/Thor">Thor</a></li>
        <li><a href="/personagem/marvel/Homem-Aranha">Homem-Aranha</a></li>
        <li><a href="/personagem/marvel/Homem-de-Ferro">Homem de Ferro</a></li>
      </ul>

      <p><a href="/">← Voltar para a página inicial</a></p>
    </body>
    </html>
  `);

});
//DC
app.get('/dc', (req, res) => {

    res.send(`
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
      <meta charset="UTF-8">
      <title>DC</title>
    </head>
    <body>
      <h1>DC</h1>
      <p>A DC Comics é uma das principais editoras de quadrinhos, famosa por personagens icônicos como Batman, Superman, Mulher-Maravilha e Flash.</p>

      <h2>Personagens disponíveis</h2>
      <ul>
        <li><a href="/personagem/dc/Batman">Batman</a></li>
        <li><a href="/personagem/dc/Superman">Superman</a></li>
        <li><a href="/personagem/dc/Mulher-Maravilha">Mulher-Maravilha</a></li>
      </ul>

      <p><a href="/">← Voltar para a página inicial</a></p>
    </body>
    </html>
  `);

});

//Rota com dois parametros
app.get('/personagem/:empresa/:nome', (req, res) => {
  const { empresa, nome } = req.params;

  res.send(`
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
      <meta charset="UTF-8">
      <title>${nome}</title>
    </head>
    <body>
      <h1>Personagem: ${nome}</h1>
      <p><strong>Empresa:</strong> ${empresa.toUpperCase()}</p>
      <p>Você acessou o personagem <strong>${nome}</strong> da empresa <strong>${empresa}</strong>.</p>

      <p>
        <a href="/${empresa}">← Voltar para ${empresa}</a> |
        <a href="/">Página inicial</a>
      </p>
    </body>
    </html>
  `);
});


//Inicia o Servidor
app.listen(PORT, () => {

    console.log(`Servidor rodando em http://localhost:${PORT}`);

});