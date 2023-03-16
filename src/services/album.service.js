const db = require('../utils/db-execute.util');

async function findAllAlbum(req) {
    try {
        let query = "SELECT * FROM album JOIN artist on album.artist_id = artist.id";
        let data = await db.execute(query);
        return data;
    } catch (err) {
        throw err;
    }
}

async function findAlbumById(albumId) {
    try {
        let query = "SELECT * FROM album JOIN artist on album.artist_id = artist.id WHERE album.id = ?";
        let data = await db.execute(query, [albumId]);

        return data;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    findAllAlbum,
    findAlbumById
}