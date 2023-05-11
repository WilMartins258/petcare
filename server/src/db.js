const mysql = require('mysql2');

/**
 * Criando conexão com o banco de dados MySQL
 * Neste caso utilizando as configurações do mysql local que criei e a base de teste
 */
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'petcare_homo'
});

// connection.connect((err) => {
//     if (err) throw err;
//     connection.query("SELECT * FROM usuario", (err, result) => {
//       if (err) throw err;
//       console.log(result);
//     });
// });


module.exports = connection;