const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'stacksofwax',
    port: '3306',
    multipleStatements: true
});


connection.connect((err)=>{
    if (err) return console.log(err.message);
    console.log('Connected to local mysql db');
});


module.exports = connection;
