const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 20,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    database: process.env.MYSQL_DB,
    port: process.env.MYSQL_PORT,
    password: process.env.MYSQL_PASSWORD,
    multipleStatements: true,
    queueLimit: 10
})

pool.getConnection((err)=>{
    if(err) return console.log(err.message);
    console.log("connected to db using createPool");
});

module.exports = pool;
