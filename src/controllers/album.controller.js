const AlbumModel = require('../models/album.model');

const get = (req, res) => {
    let albums = AlbumModel.read();
    console.log(albums);
    res.send(albums);
}

module.exports = {get: get};