const express = require('express');
const router = express.Router();
const userAuthorization = require('../middlewares/auth.middleware');
const validateBodyGuard = require("../middlewares/validate-body.middleware");

const albumController = require('../controllers/album.controller');
const collectionController = require('../controllers/collection.controller');
const artistController = require('../controllers/artist.controller');

const { updateCollectionSchema } = require('../middlewares/body-validations/update-collection.schema');

router.get('/albums', albumController.getAllAlbum);
router.get('/albums/:albumId', albumController.getAlbumById);
router.get('/albums-filter', albumController.getAlbumFilter);

router.get('/collections', collectionController.getAllCollection);
router.get('/collections/:collectionId', collectionController.getCollectionById);
router.get('/my-collections', userAuthorization, collectionController.getMyCollections);

router.post('/collections', userAuthorization, collectionController.postCollection);
router.put('/collections/:collectionId', userAuthorization, validateBodyGuard(updateCollectionSchema), collectionController.updateCollection);
router.post('/my-collections/:collectionId/manage-album/add', userAuthorization, collectionController.postAlbumToCollection)
router.delete('/my-collections/:collectionId/manage-album/delete', userAuthorization, collectionController.deleteAlbumFromCollection)
router.post('/collections/:collectionId/like/post', userAuthorization, collectionController.likeCollection)
router.delete('/collections/:collectionId/like/delete', userAuthorization, collectionController.unlikeCollection)
router.get('/collections/:collectionId/like/check', userAuthorization, collectionController.checkUserLikedCollection)
router.post('/collections/:collectionId/comment', userAuthorization, collectionController.postCommentCollection)

router.get('/artists', artistController.getAllArtist);
router.get('/artists/:artistId', artistController.getArtistById);

router.get('/genres', albumController.getAllGenres)

module.exports = router;