const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'qwerty',
    database: 'joga_mysql_oop'
})

connection.connect((error) => {
    if(error) throw error;
    console.log('MySQL server connected')
})

module.exports = connection