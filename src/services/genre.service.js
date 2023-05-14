const db = require('../utils/db-execution.util');

async function findAllGenres() {
    const query = "SELECT id, genre_name FROM genre";
    const data = await db.execute(query);

    return data;
}

module.exports = {
    findAllGenres
}