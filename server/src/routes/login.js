const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('passou pelo /login')
    res.status(200).send('Dados da página de login.');
});

router.post('/', (req, res) => {
    console.log('passou pelo /login POST')
    res.send('Dados da página de login.');
});

module.exports = router;