const db = require('../utils/db-execution.util');


async function findAllArtist(limit, offset) {

    const query = 'SELECT id as artist_id, artist_name, artist_description, img_path FROM artist LIMIT ? OFFSET ?';
    const data = await db.execute(query, [limit, offset]);

    return data;

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
}


module.exports = {
    findAllArtist,
    // findCollectionById,
};