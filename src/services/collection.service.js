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

    if (!data) throw "Collection Not Found";
    // {message: "Collection Not Found"};

    return data;

}

async function createCollection() {
    try {
        let query = `INSERT INTO album_collection (collection_name) VALUES ('New Collection');
                    SELECT * FROM album_collection WHERE id = LAST_INSERT_ID();`;

        let data = await db.execute(query);

        return data[1][0];
    } catch (err) {
        throw err;
    }
}

async function updateCollection(collectionId, newCollectionData) {
    try {

    } catch (err) {
        throw err;
    }
}


module.exports = {
    findAllCollection: findAllCollection,
    createCollection: createCollection,
    findCollectionById: findCollectionById,
    updateCollection: updateCollection
};