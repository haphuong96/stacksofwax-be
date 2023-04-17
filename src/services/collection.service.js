const createHttpError = require('http-errors');
const db = require('../utils/db-execution.util');
const createError = require('http-errors');

async function findAllCollection(limit, offset, sort) {
    const pagination = ` LIMIT ? OFFSET ? `;

    const orderByQuery = (sort.length > 0) ? sort.map(column => {
        if (!column.startsWith('-')) return `${column} ASC`;
        return `${column.replace('-', '')} DESC`
    }).join(', ') : '';

    const collectionQuery = `SELECT 
                                ac.id AS collection_id,
                                ac.collection_name,
                                ac.collection_desc,
                                ac.img_path,
                                ac.last_updated_datetime,
                                ac.created_datetime,
                                u.id AS created_by,
                                u.username
                            FROM 
                                album_collection ac
                            JOIN user u ON ac.created_by = u.id`;
    
    const query = collectionQuery + orderByQuery + pagination + ";";
    
    const countQuery = ` SELECT COUNT(id) AS total FROM album_collection;`;

    const data = await db.execute(query+countQuery, [limit, offset]);

    const { total } = data[1][0];

    return {
        total,
        collections : data[0]
    };

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
                        ac.last_updated_datetime,
                        ac.created_datetime,
                        u.id AS user_id,
                        u.username
                    FROM 
                        album_collection ac
                    JOIN user u ON ac.created_by = u.id
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

    executionQuery = collectionQuery + albumQuery;
    const data = await db.execute(executionQuery, queryParams);

    const { user_id, username, ...collection } = data[0][0];
    const collectionAlbums = data[1];

    return {
        ...collection,
        created_by: {
            user_id,
            username
        },
        albums: collectionAlbums
    };
}

async function findCollectionByUserId(limit, offset, userId) {
    const collectionQuery = ` SELECT 
                                ac.id AS collection_id,
                                ac.collection_name,
                                ac.collection_desc,
                                ac.img_path,
                                ac.created_by,
                                ac.last_updated_datetime,
                                ac.created_datetime,
                                u.id AS created_by,
                                u.username
                            FROM 
                                album_collection ac
                            JOIN user u ON ac.created_by = u.id
                            WHERE 
                                ac.created_by = ?
                            LIMIT ?
                            OFFSET ?;
                        `;

    const countCollectionQuery = `SELECT 
                                    COUNT(id) as total 
                                FROM 
                                    album_collection 
                                WHERE 
                                    created_by = ?;`

    const data = await db.execute(collectionQuery + countCollectionQuery, [userId, limit, offset, userId]);
    return {
        total: data[1][0].total,
        collections: data[0]
    }
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
async function updateCollection(collectionId, userId, newCollectionData) {
    // check if collection exists 
    // if no collection found, throw exception
    const findCollection = await findCollectionById(collectionId);
    if (findCollection.length == 0) {
        throw createError.BadRequest("Collection not found!");
    }

    // if user is not the creator of this collection, cannot update
    if (findCollection.created_by.user_id !== userId) {
        throw createError.BadRequest("User has no right to update this collection!")
    }

    // unbox collection data
    const { collection_name, collection_desc, img_path } = newCollectionData;

    const query = `UPDATE 
                        album_collection 
                    SET 
                        collection_name = ?, 
                        collection_desc = ?
                    WHERE 
                        id = ?;

                    SELECT 
                        ac.id AS collection_id,
                        ac.collection_name,
                        ac.collection_desc,
                        ac.img_path,
                        ac.created_by,
                        ac.last_updated_datetime,
                        ac.created_datetime,
                        u.id AS user_id,
                        u.username 
                    FROM album_collection ac
                    JOIN user u ON ac.created_by = u.id 
                    WHERE 
                        ac.id = ?`;

    const data = await db.execute(query, [collection_name, collection_desc, collectionId, collectionId]);

    const {user_id, username, ...collection } = data[1][0];
    return {
        ...collection,
        created_by : {
            user_id,
            username
        }
    };

}


module.exports = {
    findAllCollection,
    createCollection,
    findCollectionById,
    updateCollection,
    findCollectionByUserId
};