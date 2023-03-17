const db = require('../utils/db-execution.util');

async function findAllAlbum(req) {
    try {
        const query = "SELECT * FROM album JOIN artist on album.artist_id = artist.id";
        const data = await db.execute(query);
        return data;
    } catch (err) {
        throw err;
    }
}

async function findAlbumById(albumId) {
    try {
        const query = "SELECT * FROM album JOIN artist on album.artist_id = artist.id WHERE album.id = ?";
        const data = await db.execute(query, [albumId]);

        return data;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    findAllAlbum,
    findAlbumById
}