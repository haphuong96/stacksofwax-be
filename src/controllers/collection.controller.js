const collectionService = require('../services/collection.service');

async function getAllCollection(req, res) {
    try {
        let findAllCollectionData = await collectionService.findAllCollection(req);
        res.status(200).send({data: findAllCollectionData});
    } catch (err) {
        throw err;
    }
}

async function getCollectionById(req, res) {
    try {
        let collectionId = req.params.collectionId;

        let findCollectionByIdData = await collectionService.findCollectionById(collectionId);
        res.status(200).send({data: findCollectionByIdData});
    } catch (err) {
        throw err;
    }
}


async function postCollection(req, res) {
    try {
        let newCollectionCreated = await collectionService.createCollection();
        res.status(201).send({message: "New collection created", data: newCollectionCreated});
    } catch (err) {
        throw err;
    }
}

async function updateCollection(req, res) {
    let collectionId = req.params.collectionId;
    let newCollectionData = req.body;
    let updateCollection = await collectionService.updateCollection(collectionId, newCollectionData);

    res.status(200).send({message: `Update collection id ${collectionId} successfully`, data: updateCollection})
}

module.exports = { 
    getAllCollection: getAllCollection,
    getCollectionById: getCollectionById,
    postCollection: postCollection,
    updateCollection: updateCollection
};