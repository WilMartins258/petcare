// Importando módulos
const express = require('express');
const router = require('./routes/index.js');
const cors = require('cors');

// Importando conexão com banco
const db = require('./db.js');

// Criando uma instância do express
const app = express();

app.use(express.json());
app.use(router);
app.use(cors);

app.listen(3001, () => {
    console.log('Listening on port 3001');
})
