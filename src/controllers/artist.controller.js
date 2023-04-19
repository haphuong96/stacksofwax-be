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

        const data = await artistService.findArtistById(artistId);

        res.status(200).send(data);
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getAllArtist,
    getArtistById
};