// Importando módulos
const express = require('express');
const cors = require('cors');

const routes = express.Router();

const app = express();

app.use(cors());

routes.get('/', cors(), (req, res) => {
    res.send('Dados da página inicial');
});

// routes.post('/login', cors(), (req, res) => {
//     console.log('LOGIN route')

//     const { email, password} = req.body;
    
//     res.send(`email: ${email} \n senha: ${password}`);
// });

routes.post('/register', (req, res) => {
    console.log('register route')

    const { email, password} = req.body;
    res.setHeader('Access-Control-Allow-Origin', '*');
    // res.send(`email: ${email} \n senha: ${password}`);
});




module.exports = routes;
