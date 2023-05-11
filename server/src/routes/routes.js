// Importando módulos
const express = require('express');

const routes = express.Router();

routes.post('/login', (req, res) => {
    console.log('LOGIN')

    const { email, password} = req.body;
    
    res.send(`email: ${email} \n senha: ${password}`);
});

module.exports = routes;
