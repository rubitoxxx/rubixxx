const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;
const DB_PATH = 'mensagens.json';

app.use(cors());
app.use(bodyParser.json());

// Carregar mensagens
app.get('/mensagens', (req, res) => {
  if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, '[]');
  }
  const data = fs.readFileSync(DB_PATH);
  res.json(JSON.parse(data));
});

// Salvar nova mensagem
app.post('/mensagens', (req, res) => {
  const { autor, texto, data } = req.body;
  const mensagens = JSON.parse(fs.readFileSync(DB_PATH));
  mensagens.unshift({ autor, texto, data });
  fs.writeFileSync(DB_PATH, JSON.stringify(mensagens, null, 2));
  res.sendStatus(201);
});

// Apagar mensagem
app.delete('/mensagens/:index/:autor', (req, res) => {
  const { index, autor } = req.params;
  const mensagens = JSON.parse(fs.readFileSync(DB_PATH));

  if (mensagens[index] && mensagens[index].autor === autor) {
    mensagens.splice(index, 1);
    fs.writeFileSync(DB_PATH, JSON.stringify(mensagens, null, 2));
    res.sendStatus(200);
  } else {
    res.sendStatus(403); // não autorizado
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
