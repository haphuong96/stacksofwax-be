const db = require('../utils/db-execute.util');

async function findAllCollection(req) {
    try {
        let query = 'SELECT * FROM album_collection';
        let data = await db.execute(query);

        return data;
    } catch (err) {
        throw err;
    }
}

async function findCollectionById(collectionId) {

    let query = 'SELECT * FROM album_collection WHERE id = ?';
    let data = await db.execute(query, [collectionId]);

    return data;

}

async function createCollection() {
    try {
        let query = `INSERT INTO album_collection (collection_name) VALUES ('New Collection');
                    SELECT * FROM album_collection WHERE id = LAST_INSERT_ID();`;

        let data = await db.execute(query);

        return data[1];
    } catch (err) {
        throw err;
    }
}

async function updateCollection(collectionId, newCollectionData) {
    try {
        // check if collection exists 
        // if no collection found, throw exception
        const collection = await findCollectionById(collectionId);
        if (collection.length == 0) {
            throw new Error("Collection not found!")
        }

        // unbox collection data
        const {collection_name, collection_desc, img_path} = newCollectionData;

        const query = `UPDATE album_collection SET collection_name = ?, collection_desc = ?, img_path = ?;
                        SELECT * FROM album_collection WHERE id = ?`;

        const data = await db.execute(query, [collection_name, collection_desc, img_path, collectionId]);

        return data[1];
    } catch (err) {
        throw err;
    }
}


module.exports = {
    findAllCollection,
    createCollection,
    findCollectionById,
    updateCollection
};