const connection = require('../databases/db-connection');

function execute(query, paramList) {
    return new Promise((resolve, reject) => {
        connection.query(query, paramList, (err, data) => {
            if (err) throw err;
            resolve(data);
        });
    });
}

module.exports = {execute: execute};