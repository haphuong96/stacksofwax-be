const collectionController = require("../controllers/collection.controller");
const userAuthorization = require("../middlewares/auth.middleware");

const collectionRoutes = [
  { path: "/collections", params: [collectionController.getAllCollection] },
  {
    path: "/collections/:collectionId",
    params: [collectionController.getCollectionById],
  },
  {
    path: "/collections",
    method: "post",
    params: [userAuthorization, collectionController.postCollection],
  },
  {
    path: "/collections/:collectionId",
    method: "put",
    params: [collectionController.updateCollection],
  },
];

module.exports = { collectionRoutes };
