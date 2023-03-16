const collectionService = require('../services/collection.service');

async function getAllCollection(req, res) {
    try {
        let collections = await collectionService.findAllCollection(req);
        res.status(200).send({data: collections});
    } catch (err) {
        throw err;
    }
}

async function getCollectionById(req, res) {
    try {
        let collectionId = req.params.collectionId;

        let collection = await collectionService.findCollectionById(collectionId);
        res.status(200).send({data: collection});
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
    console.log(req.body);
    let updateCollection = await collectionService.updateCollection(collectionId, newCollectionData);

    res.status(200).send({message: `Update collection id ${collectionId} successfully`, data: updateCollection})
}

module.exports = { 
    getAllCollection,
    getCollectionById,
    postCollection,
    updateCollection
};