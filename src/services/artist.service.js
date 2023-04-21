const db = require('../utils/db-execution.util');
const { Artist, ArtistAlbum } = require('../repositories/artist.repository');

async function findAllArtist(limit, offset, searchKeyword) {
    const selectQuery = `SELECT id as artist_id, artist_name, artist_description, img_path FROM artist`;
    const countSelectQuery = ` SELECT COUNT(id) AS total FROM artist`;

    const pagination = ` LIMIT ? OFFSET ?`;
    const paginationParams = [limit, offset];

    
    let orderByQuery = '';
    let whereQuery = '';
    const orderByParams = [];
    const whereParams = [];

    if (searchKeyword) {
        orderByQuery = ` ORDER BY (CASE WHEN artist_name = ? THEN 1 WHEN artist_name LIKE ? THEN 2 ELSE 3 END)`;
        orderByParams.push(searchKeyword, `${searchKeyword}%`);
        whereQuery = ` WHERE artist_name LIKE ?`;
        whereParams.push(`%${searchKeyword}%`);
    }

    const artistQuery = selectQuery + whereQuery + orderByQuery + pagination;
    const countQuery = countSelectQuery + whereQuery;
    
    const data = await db.execute(`${artistQuery}; ${countQuery}`, [...whereParams, ...orderByParams, ...paginationParams, ...whereParams]);

    const { total } = data[1][0];

    return {
        total,
        artists : data[0]
    };

}

async function findArtistDetailById(artistId) {

    const data = await Artist.findOne(artistId);

    return data;
    // const artistQuery = `SELECT 
    //                         id as artist_id, 
    //                         artist_name, 
    //                         artist_description, 
    //                         img_path 
    //                     FROM 
    //                         artist 
    //                     WHERE 
    //                         id = ?`;
    // const data = await db.execute(artistQuery, [artistId]);

    // return data[0];
}

async function findAlbumsByArtistId(artistId) {
    // const query = `SELECT
    //                     aat.album_id,
    //                     a.album_title,
    //                     a.img_path
    //                 FROM
    //                     album_artist aat
    //                 JOIN album a ON a.id = aat.album_id
    //                 WHERE 
    //                     aat.artist_id = ? 
    //                     `
    // const data = await db.execute(query, [artistId]);

    const data = await ArtistAlbum.findAlbumsByArtistId(artistId);
    return data;
}


module.exports = {
    findAllArtist,
    findArtistDetailById,
    findAlbumsByArtistId
};