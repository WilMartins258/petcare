const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
    console.log('GET /register')
    res.status(200).send('GET - Dados da página de registro.');
});

const selectCustomers = async () => {
    const connection = await db;
    const [rows] = await connection.query('SELECT * FROM telefone;');
    return rows;
}

router.post('/', async (req, res) => {
    console.log('POST /register');

    

    const test = await selectCustomers();

    console.log('OLHA O TESTE:')
    console.log({test})

    // console.log({body: req.body});

    // const full_phone = req.body.phone;
    // const areaCode = full_phone.substring(1, 3);
    // let phone = full_phone.substring(4);
    // phone = phone.replace('-', '');

    // console.log('areaCode::: ', areaCode);
    // console.log('phone::: ', phone);

    // const phone_insert_query = "INSERT INTO telefone VALUES (null, '+55', ?, ?)";
    // const phone_info = [areaCode, phone];

    // var inserted_phone_id;

    

    // // db.query(phone_insert_query, phone_info,
    // //     (err, results) => {
    // //         console.log('ENTROU NA QUERY DE INSERIR TELEFONE\n')
    // //         if (err) {
    // //             console.log('Erro:: \n', err);
    // //             console.log('\n\n\n');
    // //         }
    // //         console.log(results)
    // //         setInsertedId(results)
    // //     }
    // // );

    // const last_phone_id = "SELECT id FROM telefone ORDER BY id DESC LIMIT 1;"

    // console.log('last_phone_id:: ', last_phone_id);

    

    // db.query(last_phone_id,
    //     (err, results) => {
    //         console.log('ENTROU NA QUERY DE RECUPERAR ID DO TELEFONE\n')
    //         if (err) {
    //             console.log('Erro:: \n', err);
    //             console.log('\n\n\n');
    //         } else {
    //             console.log('RESULTADO DA QUERY::')
    //             console.log(results)
    //         }
    //     }
    // );

    res.status(200).send('POST - Dados da página de registro.');
});

module.exports = router;


const setInsertedId = (new_id) => {
    console.log('setInsertedId');
    
    if (new_id) {
        console.log('IF');
        inserted_phone_id = new_id;
        console.log({inserted_phone_id});
    } else {
        console.log('ELSE');
        console.log({inserted_phone_id});
        return inserted_phone_id;
    }
}

/*
    Dá pra simplesmente salvar o usuário com qualquer id de telefone 'x' por exemplo e só depois fazer um update 
    nesse id com base no insertId que tenhoa acesso dentro do results... 
    eis os results::  ResultSetHeader {
        fieldCount: 0,
        affectedRows: 1,
        insertId: 6,
        info: '',
        serverStatus: 2,
        warningStatus: 0
    }
*/