const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, '../'))); // Serve arquivos da raiz do projeto

app.use(express.json()); // Para interpretar requisições JSON

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../html/Cofeci/BuscaCorretor.html'))
})

// Rota proxy para a API
app.post('/proxy/BuscaCorretorEmpresa', async (req, res) => {
  const fetch = (await import('node-fetch')).default; // Importação dinâmica

  const response = await fetch('https://api.cofeci.gov.br/api/BuscaCorretorEmpresa', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req.body), // Passa o corpo da requisição
  });
  
  const data = await response.json();
  res.json(data); // Envia a resposta JSON para o cliente
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
