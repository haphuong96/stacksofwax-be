const albumService = require('../services/album.service');

async function getAllAlbum(req, res) {
    try {
        let albums = await albumService.findAllAlbum(req);
        res.status(200).send({data: albums});
    } catch (error) {
        res.send(error);
    }
}

module.exports = { getAllAlbum: getAllAlbum };