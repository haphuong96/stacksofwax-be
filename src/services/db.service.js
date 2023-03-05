const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    database: process.env.MYSQL_DB,
    port: process.env.MYSQL_PORT,
    multipleStatements: true
});


connection.connect((err)=>{
    if (err) return console.log(err.message);
    console.log('Connected to local mysql db');
});


module.exports = connection;
