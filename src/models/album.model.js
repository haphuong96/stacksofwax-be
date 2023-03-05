const connection = require('../services/db.service');

function Album(params) {
    this.title = params.title;
}

read = () => {
    let result;
    let query = `SELECT * FROM album`;
    connection.query(query, (err, albums) => {
        if (err) return console.log(err.message);
        result = albums;
    });
    return result;
}

module.exports = {Album: Album, read: read};