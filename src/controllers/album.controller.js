// const AlbumModel = require('../models/album.model');
const albumGetAll = require('../services/album.service');

function getAll(req, res) {
    albumGetAll(req)
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((err) => {
            res.send(err);
        })


    // AlbumModel.read()
    //     .then((albums) => { res.status(200).send(albums) });
        
    // callback option    
    // AlbumModel.read((result) => {
    //     res.send(result);
    // })
}

module.exports = { getAll: getAll };