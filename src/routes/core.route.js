const express = require('express');
const router = express.Router();

const AlbumController = require('../controllers/album.controller');
const CollectionController = require('../controllers/collection.controller');

router.get('/albums', AlbumController.getAll);
router.get('/collections', CollectionController.getAll);
router.post('/collections', CollectionController.post);

module.exports = router;