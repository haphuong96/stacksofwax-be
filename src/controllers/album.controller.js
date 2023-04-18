const albumService = require("../services/album.service");
const genreService = require("../services/genre.service");
const decadeService = require("../services/decade.service");

async function getAllAlbum(req, res, next) {
  try {
    /**
     * @type string[]
     */
    const genreIds = (typeof req.query.genreId === "string") ? [req.query.genreId] : req.query.genreId;
    const decade = parseInt(req.query.decade);
    const limit = parseInt(req.query.limit);
    const offset = parseInt(req.query.offset);
    const searchKeyword = req.query.search;

    const data = await albumService.findAllAlbum(limit, offset, {
      searchKeyword,
      genreIds,
      decade,
    });

    // send data  
    res.status(200).send(data);
  } catch (error) {
    console.log(error)
    next(error);
  }
}

async function getAlbumById(req, res, next) {
  try {
    const albumId = req.params.albumId;

    const data = await albumService.findAlbumById(albumId);

    // send data
    res.status(200).send(data);
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

async function getAlbumFilter(req, res, next) {
  try {
    const [genres, decades] = await Promise.all([
      genreService.findAllGenres(),
      decadeService.findAllValidDecades(),
    ]);
    res.status(200).send({ genres, decades });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllAlbum,
  getAlbumById,
  getAllGenres,
  getAlbumFilter
};
