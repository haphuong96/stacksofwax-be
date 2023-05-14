const express = require("express");
const router = express.Router();
const userAuthorization = require("../middlewares/auth.middleware");
const validator = require("../middlewares/schema-validator.middleware");
const collectionController = require("../controllers/collection.controller");
const {updateCollectionSchema} = require("../validators/update-collection.schema");
const { getAllQuerySchema } = require("../validators/get-query.schema");

router.get(
  "/collections",
  validator(getAllQuerySchema, "query"),
  collectionController.getAllCollection
);

router.get(
  "/collections/:collectionId",
  collectionController.getCollectionById
);

router.get(
  "/collections/:collectionId/comments",
  validator(getAllQuerySchema, "query"),
  collectionController.getCollectionCommentsByCollectionId
);

router.get(
  "/collections/:collectionId/details",
  collectionController.getCollectionDetailsByCollectionId
);

router.post(
    "/collections/:collectionId/like/post",
    userAuthorization,
    collectionController.likeCollection
);

router.delete(
    "/collections/:collectionId/like/delete",
    userAuthorization,
    collectionController.unlikeCollection
);

router.get(
  "/collections/:collectionId/albums",
  validator(getAllQuerySchema, "query"),
  collectionController.getCollectionAlbumByCollectionId
);

router.get(
  "/me/collections",
  userAuthorization,
  validator(getAllQuerySchema, "query"),
  collectionController.getMyCollections
);

router.get(
  "/me/favorite-collections",
  userAuthorization,
  validator(getAllQuerySchema, "query"),
  collectionController.getMyFavoriteCollections
);

router.post(
  "/collections",
  userAuthorization,
  collectionController.postCollection
);

router.put(
  "/collections/:collectionId",
  userAuthorization,
  validator(updateCollectionSchema, "body"),
  collectionController.updateCollection
);

router.delete(
  "/collections/:collectionId",
  userAuthorization,
  collectionController.deleteCollection
);

router.post(
  "/me/collections/:collectionId/manage-album/add",
  userAuthorization,
  collectionController.postAlbumToCollection
);

router.delete(
  "/me/collections/:collectionId/manage-album/delete",
  userAuthorization,
  collectionController.deleteAlbumFromCollection
);

router.get(
  "/collections/:collectionId/like/check",
  userAuthorization,
  collectionController.checkUserLikedCollection
);

router.post(
  "/collections/:collectionId/comments",
  userAuthorization,
  collectionController.postCommentCollection
);

router.get(
  "/users/:userId/collections",
  validator(getAllQuerySchema, "query"),
  collectionController.getPublicCollectionsByUserId
);

module.exports = router;