const artistService = require('../services/artist.service');

async function getAllArtist(req, res, next) {
    try {
        const limit = parseInt(req.query.limit);
        const offset = parseInt(req.query.offset);
        const data = await artistService.findAllArtist(limit, offset);

        res.status(200).send(data);
    } catch (err) {
        next(err);
    }
}

// async function getCollectionById(req, res, next) {
//     try {
//         const collectionId = req.params.collectionId;

//         const data = await collectionService.findArtistById(collectionId);
//         const collection = data.collection;
//         collection.albums = data.collectionAlbums;
//         collection.created_by = data.createdByUser;
        
//         res.status(200).send(collection);
//     } catch (err) {
//         next(err);
//     }
// }

module.exports = {
    getAllArtist,
    // getCollectionById,
};