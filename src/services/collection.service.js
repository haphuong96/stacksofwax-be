const db = require('../utils/db-execution.util');

async function findAllCollection(req) {

    const query = 'SELECT * FROM album_collection';
    const data = await db.execute(query);

    return data;

}

async function findCollectionById(collectionId) {

    const query = 'SELECT * FROM album_collection WHERE id = ?';
    const data = await db.execute(query, [collectionId]);

    return data;

}

async function createCollection() {
    const query = `INSERT INTO album_collection (collection_name) VALUES ('New Collection');
                    SELECT * FROM album_collection WHERE id = LAST_INSERT_ID();`;

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