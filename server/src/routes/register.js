const express = require('express');
const router = express.Router();
const db = require('./../db');

router.get('/', (req, res) => {
    console.log('GET /register')
    res.status(200).send('GET - Dados da página de registro.');
});

router.post('/', (req, res) => {
    console.log('POST /register');

    console.log({body: res.body});

    res.status(200).send('POST - Dados da página de registro.');
});

module.exports = router;