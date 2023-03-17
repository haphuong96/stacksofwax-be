const collectionService = require('../services/collection.service');

async function getAllCollection(req, res) {
    try {
        let collections = await collectionService.findAllCollection(req);
        res.status(200).send(collections);
    } catch (err) {
        throw err;
    }
}

async function getCollectionById(req, res) {
    try {
        let collectionId = req.params.collectionId;

        let collection = await collectionService.findCollectionById(collectionId);
        res.status(200).send(collection);
    } catch (err) {
        throw err;
    }
}


async function postCollection(req, res) {
    try {
        let newCollectionCreated = await collectionService.createCollection();
        res.status(201).send(newCollectionCreated);
    } catch (err) {
        throw err;
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