const artistService = require('../services/artist.service');

async function getAllArtist(req, res, next) {
    try {
        const limit = parseInt(req.query.limit);
        const offset = parseInt(req.query.offset);
        const searchKeyword = req.query.search;

        const data = await artistService.findAllArtist(limit, offset, searchKeyword);

        res.status(200).send(data);
    } catch (err) {
        next(err);
    }
}

async function getArtistById(req, res, next) {
    try {
        const artistId = req.params.artistId;

        const { ...details } = await artistService.findArtistDetailById(artistId);

        const albums = await artistService.findAlbumsByArtistId(artistId);

        res.status(200).send({
            ...details,
            albums: albums
        });
        
    } catch (err) {
        console.log(err)
        next(err);
    }
}

module.exports = {
    getAllArtist,
    getArtistById
};