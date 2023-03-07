const connection = require('../services/db.service');

function albumRead(queryString) {
    return new Promise((resolve, reject) => {
        let query = 'SELECT * FROM album';
        connection.query(query, (err, albums) => {
            if (err) console.log(err);
            resolve(albums);
        });
    });
}

module.exports = albumRead;