const collectionService = require('../services/collection.service');

async function getAllCollection(req, res) {
    try {
        const  collections = await collectionService.findAllCollection(req);
        res.status(200).send(collections);
    } catch (err) {
        next(err);
    }
}

async function getCollectionById(req, res, next) {
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

async function getMyCollections(req, res, next) {
    try {
        const userId = req.tokenDecoded.userId;
        const limit = parseInt(req.query.limit);
        const offset = parseInt(req.query.offset);

        const data = await collectionService.findCollectionByUserId(limit, offset, userId);

        return res.status(200).send(data);
    } catch (err) {
        next(err)
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
    getMyCollections,
    postCollection,
    updateCollection
};