const { collectionRoutes } = require("./collection.route");
const { userRouters } = require("./users.route");
const { albumRoutes } = require("./album.route");
const express = require("express");
const router = express.Router();

const appRoutes = [...userRouters, ...albumRoutes, ...collectionRoutes];

appRoutes.forEach((apiRoute) => {
  const { path, method, params } = apiRoute;
  switch (method) {
    case "post":
      router.post(path, ...params);
      break;
    case "put":
      router.put(path, ...params);
      break;
    case "delete":
      router.delete(path, ...params);
      break;
    default:
      router.get(path, ...params);
  }
});

module.exports = router
