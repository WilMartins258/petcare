const express = require('express');
const cors = require('cors');
const router = express.Router();


router.post('/login', cors(), (req, res) => {
    console.log('LOGIN route')

    const { email, password} = req.body;
    
    res.send(`email: ${email} \n senha: ${password}`);
});

router.get('/login', cors(), (req, res) => {
    console.log('LOGIN route GET')

    res.send(`get`);
});

module.exports = router;