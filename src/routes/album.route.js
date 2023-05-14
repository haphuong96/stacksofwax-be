const express = require("express");
const router = express.Router();
const userAuthorization = require("../middlewares/auth.middleware");
const validator = require("../middlewares/schema-validator.middleware");
const albumController = require("../controllers/album.controller");
const { rateAlbumSchema } = require("../validators/rate-album.schema");
const { getAllAlbumsQuerySchema } = require("../validators/album.schema");
const { getAllQuerySchema } = require("../validators/get-query.schema");

router.get(
  "/albums",
  validator(getAllAlbumsQuerySchema, "query"),
  albumController.getAllAlbum
);

router.get(
    "/albums/:albumId", 
    albumController.getAlbumById
);

router.get(
    "/albums-filter", 
    albumController.getAlbumFilter
);

router.get(
  "/albums/:albumId/collections",
  validator(getAllQuerySchema, "query"),
  albumController.getCollectionsByAlbumId
);

router.post(
  "/albums/:albumId/comments",
  userAuthorization,
  albumController.postCommentAlbum
);

router.get(
  "/albums/:albumId/comments",
  validator(getAllQuerySchema, "query"),
  albumController.getCommentAlbum
);

router.post(
  "/albums/:albumId/rating",
  validator(rateAlbumSchema, "body"),
  userAuthorization,
  albumController.postRatingAlbum
);

router.get(
  "/albums/:albumId/rating",
  userAuthorization,
  albumController.getAlbumRating
);

router.delete(
  "/albums/:albumId/rating",
  userAuthorization,
  albumController.unrateAlbum
);

router.get(
    "/genres", 
    albumController.getAllGenres
);

module.exports = router;