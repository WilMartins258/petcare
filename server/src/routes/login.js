const express = require('express');
const router = express.Router();
const db = require('./../db');

router.get('/', (req, res) => {
    console.log('GET passou pelo /login')
    return res.status(200).send('GET Dados da página de login.');
});

/**
 * Query que busca os 
 * @returns login_data
 */
const userLogin = async (user_email) => {
    const connection = await db;
    // console.log('user_emailuser_email: ', user_email);

    const login_query = "SELECT nome, email, senha, sexo FROM usuario WHERE email = ?";

    const [login_data] = await connection.query(login_query, user_email);

    return login_data;
}

router.post('/', async (req, res) => {
    console.log('POST passou pelo /login');

    const login_info = req.body;
    // console.log(login_info);

    // Chamada para a consulta que busca pelo e-mail no nosso banco
    const loginResult = await userLogin(login_info.email);

    // console.log('\n\n\nOLHA O TESTE loginResult:');
    // console.log(loginResult[0]);

    if (!loginResult[0]){
        return res.status(200).send({
            login: false,
            msg: 'Email não encontrado'
        });
    } else {
    
        // console.log('loginResult[0].senha:', loginResult[0].senha);
        // console.log('login_info.password:', login_info.password);
    
        if (loginResult[0].senha === login_info.password){
            
            return res.status(200).send({
                login: true,
                msg: `Bem-vindo(a), ${loginResult[0].nome}!`
            });
            
        } else {
            return res.status(200).send({
                login: false,
                msg: 'Senha incorreta'
            });
        }
    }
});

module.exports = router;
