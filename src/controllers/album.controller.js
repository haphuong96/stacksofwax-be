const albumService = require('../services/album.service');
const albumSerializer = require('../serializers/album.serializer');

async function getAllAlbum(req, res, next) {
    try {
        const queryStr = req.query;
        
        let albums = await albumService.findAllAlbum(queryStr);

        // serialize list of albums
        let serializedAlbums = albumSerializer.transformAlbum(albums);

        // send data
        res.status(200).send(serializedAlbums);
    } catch (error) {
        next(error);
    }
}

async function getAlbumById(req, res) {
    try {
        let albumId = req.params.albumId;

        let album = await albumService.findAlbumById(albumId);

        // serialize album data
        let serializedAlbum = album.map(albumSerializer.transformAlbum);
        
        // send data
        res.status(200).send(serializedAlbum);
        
    } catch (err) {
        next(err);
    }
}

module.exports = { 
    getAllAlbum,
    getAlbumById 
};