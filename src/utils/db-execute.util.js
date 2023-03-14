const connection = require('../services/db.service');

function execute(query, paramList) {
    return new Promise((resolve, reject) => {
        connection.query(query, paramList, (err, data) => {
            if (err) throw err;
            resolve(data);
        });
    });
}

module.exports = {execute: execute};