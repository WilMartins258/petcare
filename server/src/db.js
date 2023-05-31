/**
 * Esse arquivo tem o único intuito de estabelexer uma coneção com o banco de dados e disponibilizá-la para todo o projeto
 * @returns connection -> Retornar uma instância de conexão com o banco de dados
 */
async function connect(){
    if (global.connection && global.connection.state !== 'disconnected') {
        return global.connection;
    }

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:123456@localhost:3306/petcare_homo");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

module.exports = connect();

//  mysql://usuario:senha@servidor:porta/banco