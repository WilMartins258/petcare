const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
    console.log('GET /register')
    res.status(200).send('GET - Dados da página de registro.');
});

/**
 * Procura pelo email enviado pelo usuário no banco de dados para garantir que não é um email já cadastrado anteriormente
 * @param {email enviado pelo front} user_email 
 * @returns 
 */
const findEmail = async (user_email) => {
    const connection = await db;

    const find_email_query = "SELECT email from usuario WHERE email = ?;";
    const [rows] = await connection.query(find_email_query, user_email);

    return rows;
}

/**
 * Insere os dados de celular no banco de dados
 * @param {código da área, número do celular} phone_info 
 * @returns Inserção do telefone no banco de dados
 */
const insertNewPhone = async (phone_info) => {
    const connection = await db;

    const phone_insert_query = "INSERT INTO telefone VALUES (null, '+55', ?, ?);";
    const [rows] = await connection.query(phone_insert_query, phone_info);

    return rows;
}

/**
 * Recupera o último ID inserido na tabela telefone
 * @returns
 */
const lastPhoneId = async () => {
    const connection = await db;

    const phone_id_query = "SELECT id FROM telefone ORDER BY id DESC LIMIT 1;";
    const [rows] = await connection.query(phone_id_query);

    return rows;
}

/**
 * Insere os dados do usuário no banco de dados
 * @param {Todos os dados do usuário} user_info 
 * @returns Inserção do usuário no banco de dados
 */
const insertNewUser = async (user_info) => {
    const connection = await db;

    console.log('DENTRO DA INSERÇÃO DE USUÁRIOS');

    // (null, null, null, last_phone_id[0].id, null, NOME, SOBRENOME, CPF, EMAIL, SENHA, SEXO, FOTO, DATA_NASC, ADMIN);
    
    const user_insert_query = "INSERT INTO usuario VALUES (null, null, null, ?, null, ?, ?, null, ?, ?, null, null, null, 0);";
    const [rows] = await connection.query(user_insert_query, user_info);

    return rows;
}

/**
 * Recupera o último ID inserido na tabela telefone
 * @returns
 */
const lastUserId = async () => {
    const connection = await db;

    const phone_id_query = "SELECT id FROM usuario ORDER BY id DESC LIMIT 1;";
    const [rows] = await connection.query(phone_id_query);

    return rows;
}

router.post('/', async (req, res) => {
    console.log('POST /register');

    console.log('OLHA O TESTE:')
    
    const user_info = req.body;
    console.log({user_info});

    const email_already_exists = await findEmail(user_info.email);

    if (email_already_exists[0]) {
        console.log('\n\n\n EMAIL JÁ EXISTE')
        return res.status(200).send({
            status: false,
            msg: 'E-mail já cadastrado!'
        });
    } else {
        console.log('\n\n\n EMAIL NÃO EXISTE')
    }


    const full_phone = user_info.phone;
    const areaCode = full_phone.substring(1, 3);
    let phone = full_phone.substring(4);
    phone = phone.replace('-', '');

    console.log('areaCode::: ', areaCode);
    console.log('phone::: ', phone);

    const phone_info = [areaCode, phone];
    console.log('phone_info::: ', phone_info);


    /**
     * Chamada para criação de inserção de celular
     */
    const insert_phone  = await insertNewPhone(phone_info);


    /**
     * Chamada para recuperação do último id do celular
     */
    const last_phone_id  = await lastPhoneId(phone_info);

    // Aqui fica guardado o último id inserido na tabela de telefone
    // console.log('last_phone_id[0].id:: ', last_phone_id[0].id);


    const user_data = [last_phone_id[0].id, user_info.name, user_info.last_name, user_info.email, user_info.password];

    /**
     * Chamada para inserção de usuário
     */
    const insert_user  = await insertNewUser(user_data);

    console.log('insert_user::', insert_user);
    
    const last_user_id  = await lastUserId(phone_info);
    
    console.log('last_user_id::', last_user_id[0]);

    return res.status(200).send({
        status: true,
        userId: last_user_id[0].id,
        msg: 'Usuário cadastrado com sucesso!'
    });
});

module.exports = router;


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