const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../'))); 

app.use(express.json()); 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../html/index.html'))
})

app.post('/proxy/BuscaCorretorEmpresa', async (req, res) => {
  const fetch = (await import('node-fetch')).default;

  const response = await fetch('https://api.cofeci.gov.br/api/BuscaCorretorEmpresa', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req.body), 
  });
  
  const data = await response.json();
  res.json(data);
});

app.post('/proxy/GravarEmail', async (req, res) => {
    const fetch = (await import('node-fetch')).default;

    const response = await fetch('https://api.cofeci.gov.br/api/GravarEmail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(req.body),
    })

    const data = await response.json();
    res.json(data);
})

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
