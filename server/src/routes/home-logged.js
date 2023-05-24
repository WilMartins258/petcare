const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('passou pelo /home-logged')
    res.status(200).send('Dados da página de home-logged.');
});

router.post('/', (req, res) => {
    console.log('passou pelo /home-logged POST')
    res.send('Dados da página de home-logged.');
});

module.exports = router;