const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('passou pelo /register')
    res.status(200).send('Dados da página de registro.');
});

router.post('/', (req, res) => {
    console.log('passou pelo /register POST')
    res.send('Dados da página de registro.');
});

module.exports = router;