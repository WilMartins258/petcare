const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('passou pelo /home')
    res.status(200).send('Dados da página de home.');
});

router.post('/', (req, res) => {
    console.log('passou pelo /home POST')
    res.send('Dados da página de home.');
});

module.exports = router;