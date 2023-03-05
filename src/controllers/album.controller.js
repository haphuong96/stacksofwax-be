const AlbumModel = require('../models/album.model');


function getAll(req, res) {
    AlbumModel.read()
        .then((albums) => { res.send(albums) });
        
    // callback option    
    // AlbumModel.read((result) => {
    //     res.send(result);
    // })
}

module.exports = { getAll: getAll };