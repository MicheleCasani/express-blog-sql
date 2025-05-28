// importo mysql2

// importare mysql
const mysql = require('mysql2');

// configurazioni MySql 
const connection = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: 'xxx',
    database: 'db_blog'
})

connection.connect((err) => {

    if (err) throw err;
    console.log('Connesso a MySql');
})

module.exports = connection;