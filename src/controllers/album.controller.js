const albumService = require('../services/album.service');
const genreService = require('../services/genre.service');
const albumSerializer = require('../serializers/album.serializer');

async function getAllAlbum(req, res, next) {
    try {
        const queryStr = req.query;
        console.log(queryStr);
        const data = await albumService.findAllAlbum(queryStr);

        // serialize list of albums
        let serializedAlbums = albumSerializer.transformAlbum(data.albums);

        // send data
        res.status(200).send({ total :data.album_count, albums: serializedAlbums, decades : data.decades});
    } catch (error) {
        next(error);
    }
}

async function getAlbumById(req, res, next) {
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

async function getAllGenres(req, res, next) {
    try {
        const genres = await genreService.findAllGenres();

        // send data
        res.status(200).send(genres);
    } catch (err) {
        next(err);
    }
}

module.exports = { 
    getAllAlbum,
    getAlbumById,
    getAllGenres
};