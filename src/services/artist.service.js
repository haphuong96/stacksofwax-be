const { search } = require('../routes/core.route');
const db = require('../utils/db-execution.util');


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

async function findArtistById(artistId) {
    const artistQuery = `SELECT id as artist_id, artist_name, artist_description, img_path FROM artist WHERE id = ?`;
    const data = await db.execute(artistQuery, [artistId]);

    return data[0];
}

/**
 * 
 * @param {*} collectionId 
 * @returns 
 */
// async function findCollectionById(collectionId) {

//     const queryParams = [];
//     let executionQuery;

//     const collectionQuery = `SELECT 
//                         ac.id as collection_id,
//                         ac.collection_name,
//                         ac.collection_desc,
//                         ac.img_path,
//                         ac.created_by,
//                         ac.last_updated_datetime,
//                         ac.created_datetime 
//                     FROM 
//                         album_collection ac
//                     WHERE 
//                         ac.id = ?;
//                     `;
//     queryParams.push(collectionId);

//     const albumQuery = `SELECT 
//                             ab.id as album_id,
//                             ab.album_title,
//                             at.id as artist_id,
//                             at.artist_name
//                         FROM
//                             album_album_collection aac
//                         JOIN album ab ON ab.id = aac.album_id
//                         JOIN album_artist aat ON aat.album_id = ab.id
//                         JOIN artist at ON aat.artist_id = at.id
//                         WHERE
//                             aac.album_collection_id = ?; 
//                         `
//     queryParams.push(collectionId);

//     const userQuery = `SELECT
//                             u.id AS user_id,
//                             u.username
//                         FROM
//                             album_collection ac
//                         JOIN user u ON ac.created_by = u.id
//                         WHERE 
//                             ac.id = ?`
//     queryParams.push(collectionId);

//     executionQuery = collectionQuery + albumQuery + userQuery;
//     const data = await db.execute(executionQuery, queryParams);

//     const collection = data[0][0];
//     const collectionAlbums = data[1];
//     const createdByUser = data[2][0];

//     return {
//         collection,
//         collectionAlbums,
//         createdByUser
//     };
// }


module.exports = {
    findAllArtist,
    findArtistById
};