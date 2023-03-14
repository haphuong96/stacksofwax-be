const express = require('express');
const router = express.Router();

const albumController = require('../controllers/album.controller');
const collectionController = require('../controllers/collection.controller');

router.get('/albums', albumController.getAllAlbum);
router.get('/collections', collectionController.getAllCollection);
router.get('/collections/:collectionId', collectionController.getCollectionById);
router.post('/collections', collectionController.postCollection);
router.put('/collections/:collectionId', collectionController.updateCollection);

module.exports = router;