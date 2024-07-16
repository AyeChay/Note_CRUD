var mysql = require('mysql2');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Thandar@2018#!',
    database: 'note'
});

connection.connect(function(error) {
    if (!!error) {
        console.log(error);
    } else {
        console.log('Database Connected Successfully..!!');
    }
});

module.exports = connection;
