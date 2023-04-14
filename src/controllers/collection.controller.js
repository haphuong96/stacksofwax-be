const collectionService = require('../services/collection.service');

async function getAllCollection(req, res) {
    try {
        let collections = await collectionService.findAllCollection(req);
        res.status(200).send(collections);
    } catch (err) {
        next(err);
    }
}

async function getCollectionById(req, res) {
    try {
        const collectionId = req.params.collectionId;

        const data = await collectionService.findCollectionById(collectionId);
        const collection = data.collection;
        collection.albums = data.collectionAlbums;
        collection.created_by = data.createdByUser;
        
        res.status(200).send(collection);
    } catch (err) {
        next(err);
    }
}


async function postCollection(req, res, next) {
    try {
        // get user who created post
        const userId = req.body.user_id;
        console.log(userId);
        // create collection
        const newCollectionCreated = await collectionService.createCollection(userId);
        res.status(201).send(newCollectionCreated);
    } catch (err) {
        next(err);
    }
}

async function updateCollection(req, res, next) {
    try {
        let collectionId = req.params.collectionId;
        let newCollectionData = req.body;

        let updateCollection = await collectionService.updateCollection(collectionId, newCollectionData);

        res.status(200).send(updateCollection);

    } catch (err) {
        next(err);
    }
}

module.exports = {
    getAllCollection,
    getCollectionById,
    postCollection,
    updateCollection
};