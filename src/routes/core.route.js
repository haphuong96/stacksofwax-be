const express = require('express');
const router = express.Router();
const userAuthorization = require('../middlewares/auth.middleware');

const albumController = require('../controllers/album.controller');
const collectionController = require('../controllers/collection.controller');
const artistController = require('../controllers/artist.controller');

router.get('/albums', albumController.getAllAlbum);
router.get('/albums/:albumId', albumController.getAlbumById);
router.get('/albums-filter', albumController.getAlbumFilter);

router.get('/collections', collectionController.getAllCollection);
router.get('/collections/:collectionId', collectionController.getCollectionById);
router.get('/my-collections', userAuthorization, collectionController.getMyCollections);
router.post('/collections', userAuthorization, collectionController.postCollection);
router.put('/collections/:collectionId', collectionController.updateCollection);

router.get('/artists', artistController.getAllArtist);

router.get('/genres', albumController.getAllGenres)

module.exports = router;