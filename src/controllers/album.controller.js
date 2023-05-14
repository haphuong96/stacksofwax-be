const albumService = require("../services/album.service");
const genreService = require("../services/genre.service");
const decadeService = require("../services/decade.service");

async function getAllAlbum(req, res, next) {
  try {
    const {
      limit,
      offset,
      search: searchKeyword,
      genreId : genreIds,
      decade,
      availableToAddToCollectionId
    } = req.query;
    
    const data = await albumService.findAllAlbum(limit, offset, {
      searchKeyword,
      genreIds,
      decade,
      availableToAddToCollectionId
    });

    // send data
    res.status(200).send(data);
  } catch (error) {
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
      decadeService.findAllValidDecades()
    ]);
    res.status(200).send({ genres, decades });
  } catch (error) {
    next(error);
  }
}

async function getCollectionsByAlbumId(req, res, next) {
  try {
    const albumId = req.params.albumId;
    const { limit, offset } = req.query;

    const data = await albumService.findCollectionsByAlbumId(
      limit,
      offset,
      albumId
    );

    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
}

async function postCommentAlbum(req, res, next) {
  try {
    const albumId = req.params.albumId;
    const userId = req.tokenDecoded.userId;
    const comment = req.body.comment;

    await albumService.createCommentAlbum(albumId, userId, comment);

    res.status(201).send({ message: "success post comment" });
  } catch (error) {
    next(error);
  }
}

async function getCommentAlbum(req, res, next) {
  try {
    const albumId = req.params.albumId;
    const { limit, offset } = req.query;

    const data = await albumService.findCommentByAlbumId(
      limit,
      offset,
      albumId
    );

    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
}

async function postRatingAlbum(req, res, next) {
  try {
    const albumId = req.params.albumId;
    const rating = req.body.rating;
    const userId = req.tokenDecoded.userId;
    await albumService.rateAlbum(userId, albumId, rating);
    res.status(200).send(true);
  } catch (error) {
    next(error);
  }
}

async function getAlbumRating(req, res, next) {
  try {
    const albumId = req.params.albumId;
    const userId = req.tokenDecoded.userId;
    const existRating = await albumService.getRating(userId, albumId);
    res.status(200).send(existRating);
  } catch (error) {
    next(error);
  }
}

async function unrateAlbum(req, res, next) {
  try {
    const albumId = req.params.albumId;
    const userId = req.tokenDecoded.userId;
    await albumService.unrate(userId, albumId);
    res.status(200).send(true);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllAlbum,
  getAlbumById,
  getAllGenres,
  getAlbumFilter,
  getCollectionsByAlbumId,
  postCommentAlbum,
  getCommentAlbum,
  postRatingAlbum,
  getAlbumRating,
  unrateAlbum
};
