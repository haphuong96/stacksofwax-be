const express = require('express');
const router = express.Router();

const AlbumController = require('../controllers/album.controller');
console.log(module);
router.get('/albums', AlbumController.get);

module.exports = router;