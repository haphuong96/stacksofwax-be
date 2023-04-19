const collectionService = require('../services/collection.service');

async function getAllCollection(req, res, next) {
    try {
        const limit = parseInt(req.query.limit);
        const offset = parseInt(req.query.offset);
        const sort = req.query.sort || [];

        const collections = await collectionService.findAllCollection(limit, offset, sort);
        res.status(200).send(collections);
    } catch (err) {
        next(err);
    }
}

async function getCollectionById(req, res, next) {
    try {
        const collectionId = req.params.collectionId;
        const operation = req.query.operationName;

        let data;
        switch (operation) {
            case 'fetchCollectionDetails':
                data = await collectionService.findCollectionDetailsById(collectionId);
                break;
            case 'fetchCollectionAlbums': 
                data = await collectionService.findCollectionAlbumDetailsById(collectionId);
                break;
            case 'fetchCollectionComments':
                data = await collectionService.findCollectionCommentsById(collectionId);
                break;
            default:
                data = await collectionService.findCollectionById(collectionId);
        }

        res.status(200).send(data);
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

        res.status(200).send(data);
    } catch (err) {
        next(err)
    }
}


async function postCollection(req, res, next) {
    try {
        // get user who created post
        const userId = req.tokenDecoded.userId;

        // create collection
        const newCollectionCreated = await collectionService.createCollection(userId);
        res.status(201).send(newCollectionCreated);
    } catch (err) {
        next(err);
    }
}

async function updateCollection(req, res, next) {
    try {
        const collectionId = req.params.collectionId;
        const userId = req.tokenDecoded.userId;

        const newCollectionData = req.body;

        const updateCollection = await collectionService.updateCollection(collectionId, userId, newCollectionData);

        res.status(200).send(updateCollection);

    } catch (err) {
        console.log(err)
        next(err);
    }
}

async function postAlbumToCollection(req, res, next) {
    try {
        const collectionId = req.params.collectionId;
        const albumId = req.body.album_id;
        const data = await collectionService.addAlbumToCollection(collectionId, albumId);

        res.status(200).send({message: "Success"});
    } catch (error) {
        next(error);
    }
}

async function deleteAlbumFromCollection(req, res, next) {
    try {
        const collectionId = req.params.collectionId;
        const albumId = req.body.album_id;
        const data = await collectionService.deleteAlbumFromCollection(collectionId, albumId);

        res.status(200).send({message: "Success"});
    } catch (error) {
        next(error)
    }
}

async function likeCollection(req, res, next) {
    try {
        const collectionId = req.params.collectionId;
        const userId = req.tokenDecoded.userId;
        const data = await collectionService.addLikeToCollection(collectionId, userId);

        res.status(201).send({message: "success"})
    } catch (error) {
        next(error)
    }
}

async function unlikeCollection(req, res, next) {
    try {
        const collectionId = req.params.collectionId;
        const userId = req.tokenDecoded.userId;
        const data = await collectionService.deleteLikeToCollection(collectionId, userId);

        res.status(200).send({message: "success"})
    } catch (error) {
        next(error)
    }
}

async function checkUserLikedCollection(req, res, next) {
    try {
        const collectionId = req.params.collectionId;
        const userId = req.tokenDecoded.userId;
        const data = await collectionService.findUserLikedCollection(collectionId, userId);

        res.status(200).send({is_liked: data});

    } catch (error) {
        next(error)
    }
}

async function postCommentCollection(req, res, next) {
    try {
        const collectionId = req.params.collectionId;
        const userId = req.tokenDecoded.userId;
        const comment = req.body.comment;

        const data = await collectionService.createCommentCollection(collectionId, userId, comment);

        res.status(201).send({message: "success"})
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllCollection,
    getCollectionById,
    getMyCollections,
    postCollection,
    updateCollection,
    postAlbumToCollection,
    deleteAlbumFromCollection,
    likeCollection,
    unlikeCollection,
    checkUserLikedCollection,
    postCommentCollection
};