const AlbumModel = require('../models/album.model');

const get = (req, res) => {
    AlbumModel.read.then((albums) => { res.send(albums) });
}

module.exports = { get: get };