// Importando módulos
const express = require('express');
const router = require('express').Router();
const cors = require('cors');

router.use(express.json());
router.use(cors());

router.get('/', (req, res) => {
    console.log('passou pelo /')
    res.send('Dados da página inicial.');
});


// Rotas do backend
router.use(
    "/login", 
    require("./login")
);

router.use(
    "/register", 
    require("./register")
);

router.use(
    "/home-logged", 
    require("./home-logged")
);

router.use(
    "/home", 
    require("./home")
);

module.exports = router;
