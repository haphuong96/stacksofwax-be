const db = require('../utils/db-execution.util');


async function findAllAlbum(queryStr) {
    const genreFilterQuery = `SELECT DISTINCT(album_id) FROM
    (SELECT album.id as album_id FROM album
    JOIN album_genre ON album.id = album_genre.album_id
    WHERE genre_id in (?)
    ) as genre_filter`

    const noFilterQuery = `SELECT id as album_id from album` 
    
    let appliedQuery;

    try {
        const genreId = queryStr.genreId;
        const limit = queryStr.limit;
        const offset = queryStr.offset

        if (genreId) {
            appliedQuery = genreFilterQuery
        } else {
            appliedQuery = noFilterQuery
        }

        const query = `SELECT 
        album.id as album_id, 
        album.album_title, 
        album.release_year, 
        artist.id as artist_id, 
        artist.artist_name 
        FROM
        (${appliedQuery}
        LIMIT ${limit}
        OFFSET ${offset}) as pagination
        JOIN album on pagination.album_id = album.id
        JOIN album_artist on pagination.album_id = album_artist.album_id
        JOIN artist on artist.id = album_artist.artist_id`;

        const data = await db.execute(query, [genreId]);
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