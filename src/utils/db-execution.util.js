const connection = require('../databases/db-connection');

// var options  = {nestTables: true};

function execute(query, paramList) {
    // options.sql = query;
    return new Promise((resolve, reject) => {
        connection.query(query, paramList, (err, data) => {
            if (err) throw err;
            resolve(data);
        });
    });
}

module.exports = {execute: execute};