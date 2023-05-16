// Importando módulos
const express = require('express');
const router = require('express').Router();
const cors = require('cors');

// const app = express();
router.use(express.json());
router.use(cors());

router.get('/', (req, res) => {
    console.log('passou pelo /')
    res.send('Dados da página inicial.');
});


router.get('/login', (req, res) => {
    console.log('passou pelo /login')
    res.send('Dados da página de login.');
});

router.post('/login', (req, res) => {
    console.log('passou pelo /login POST')
    res.send('Dados da página de login.');
});

// Rotas do backend
// router.use(
//     "/login", 
//     require("./login")
// );

module.exports = router;
