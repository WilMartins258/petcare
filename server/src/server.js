// Importando módulos
const express = require('express');
const routes = require('./routes/routes.js');
const cors = require('cors');

// Importando conexão com banco??
const connection = require('./db.js');

// Criando uma instância do express
const app = express();

// Indicando
app.use(express.json());
app.use(routes);
app.use(cors);

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
})


console.log('Servidor rodando');


connection.query(
    "SELECT * FROM usuario",
    (err, results, fields) => {
        // console.log({results});
        console.log(`${results}`);
        console.log(results);
        // console.log({err});

        // return fields;
    }
);
