const db = require('../utils/db-execution.util');


async function findAllCollection(req) {

    const query = 'SELECT * FROM album_collection';
    const data = await db.execute(query);

    return data;

}

/**
 * 
 * @param {*} collectionId 
 * @returns 
 */
async function findCollectionById(collectionId) {

    const queryParams = [];
    let executionQuery;

    const collectionQuery = `SELECT 
                        ac.id as collection_id,
                        ac.collection_name,
                        ac.collection_desc,
                        ac.img_path,
                        ac.created_by,
                        ac.last_updated_datetime,
                        ac.created_datetime 
                    FROM 
                        album_collection ac
                    WHERE 
                        ac.id = ?;
                    `;
    queryParams.push(collectionId);
    
    const albumQuery = `SELECT 
                            ab.id as album_id,
                            ab.album_title,
                            at.id as artist_id,
                            at.artist_name
                        FROM
                            album_album_collection aac
                        JOIN album ab ON ab.id = aac.album_id
                        JOIN album_artist aat ON aat.album_id = ab.id
                        JOIN artist at ON aat.artist_id = at.id
                        WHERE
                            aac.album_collection_id = ?; 
                        `
    queryParams.push(collectionId);

    const userQuery = `SELECT
                            u.id AS user_id,
                            u.username
                        FROM
                            album_collection ac
                        JOIN user u ON ac.created_by = u.id
                        WHERE 
                            ac.id = ?`
    queryParams.push(collectionId);

    executionQuery = collectionQuery + albumQuery + userQuery; 
    const data = await db.execute(executionQuery, queryParams);

    const collection = data[0][0];
    const collectionAlbums = data[1];
    const createdByUser = data[2][0];

    return { 
        collection,
        collectionAlbums,
        createdByUser
    };
}

/**
 * 
 * @param {number} userId 
 * @returns 
 */
async function createCollection(userId) {
    const countCollectionQuery = `SELECT COUNT(id) AS total FROM album_collection WHERE created_by = ?;`
    const collectionCount = await db.execute(countCollectionQuery, [userId]);

    const query = ` INSERT INTO album_collection (collection_name, created_by) VALUES ('My Collection #${collectionCount[0].total + 1}', ${userId});
                    SELECT 
                        id AS collection_id,
                        collection_name,
                        collection_desc,
                        img_path,
                        created_by,
                        last_updated_datetime,
                        created_datetime 
                    FROM 
                        album_collection 
                    WHERE 
                        id = LAST_INSERT_ID();`;

    const data = await db.execute(query);

    return data[1];

}

/**
 * 
 * @param {BigInt} collectionId 
 * @param {{collection_name: String}} newCollectionData 
 * @returns 
 */
async function updateCollection(collectionId, newCollectionData) {
    // check if collection exists 
    // if no collection found, throw exception
    const collection = await findCollectionById(collectionId);
    if (collection.length == 0) {
        throw new Error("Collection not found!")
    }

    // unbox collection data
    const { collection_name, collection_desc, img_path } = newCollectionData;

    const query = `UPDATE album_collection SET collection_name = ?, collection_desc = ?, img_path = ?;
                        SELECT * FROM album_collection WHERE id = ?`;

    const data = await db.execute(query, [collection_name, collection_desc, img_path, collectionId]);

    return data[1];

}


module.exports = {
    findAllCollection,
    createCollection,
    findCollectionById,
    updateCollection
};