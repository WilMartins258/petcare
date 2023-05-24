const express = require('express');
const router = express.Router();
const db = require('./../db');

router.get('/', (req, res) => {
    console.log('GET passou pelo /login')
    res.status(200).send('GET Dados da página de login.');
});

router.post('/', async (req, res) => {
    console.log('POST passou pelo /login');
    consoleLogInsano('00');
    console.log('req.body');
    console.log({body: req.body});
    consoleLogInsano('01');

    const login_info = req.body;

    const login_query = "SELECT nome, email, senha, sexo FROM usuario WHERE email = ?";
    const user_email = login_info.email;

    db.query(login_query, [user_email],
        (err, results) => {
            if (!results || results.length === 0){
                consoleLogInsano('03');

                res.status(200).send({
                    login: false,
                    msg: 'Email não encontrado'
                });
            } else {
                consoleLogInsano('04');

                console.log('Email encontrado!');

                console.log('login_info.password:', login_info.password);
                console.log('results[0].senha:', results[0].senha);

                if (login_info.password === results[0].senha){
                    consoleLogInsano('05');

                    res.status(200).send({
                        login: true,
                        msg: `Bem-vindo(a), ${results[0].nome}!`
                    });
                } else {
                    consoleLogInsano('06');

                    res.status(200).send({
                        login: false,
                        msg: 'Senha incorreta'
                    });
                }
            }
        },
        consoleLogInsano('07'),
    );
});


module.exports = router;

const consoleLogInsano = (index) => {
    console.log(`consoleLogInsano ${index} \n\n`)
}
