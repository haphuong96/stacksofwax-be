const express = require('express');
const router = express.Router();
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

router.get('/albums', (req, res) => {
    let query = `SELECT * FROM album`;
    connection.query(query, (err, albums) => {
        if (err) throw err;
        res.send(albums);
    });
});

module.exports = router;