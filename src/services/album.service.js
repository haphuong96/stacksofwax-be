const db = require('../utils/db-execute.util');

async function findAllAlbum(req) {
    try {
        let query = 'SELECT ab.*, at.* FROM album ab JOIN artist at on ab.artist_id = at.id';
        let data = await db.execute(query);
        return data;
    } catch (err) {
        throw err;
    } 
}

module.exports = {
    findAllAlbum: findAllAlbum
}