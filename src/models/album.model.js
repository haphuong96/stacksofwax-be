const connection = require('../services/db.service');

function Album(params) {
    this.title = params.title;
}

const read = new Promise((resolve, reject) => {
    let query = `SELECT * FROM album`;
    connection.query(query, (err, albums) => {
        if (err) return console.log(err.message);
        resolve(albums);
    })
});

module.exports = {Album: Album, read: read};