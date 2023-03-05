const express = require('express');
const router = express.Router();

const AlbumController = require('../controllers/album.controller');

router.get('/albums', AlbumController.getAll);

module.exports = router;