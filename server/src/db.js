const mysql = require('mysql2');

/**
 * Criando conexão com o banco de dados MySQL
 * Neste caso utilizando as configurações do mysql local que criei e a base de teste
 */
const connection = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'petcare_homo'
});

module.exports = connection;

// const query = (sql, callBack) => {
//     return connection.query(sql, callBack);
// };


// module.exports = {
//     connection,
//     query
// };