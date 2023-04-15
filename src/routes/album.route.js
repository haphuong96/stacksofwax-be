const albumController = require("../controllers/album.controller");

const albumRoutes = [
  { path: "/albums", params: [albumController.getAllAlbum] },
  { path: "/albums/:albumId", params: [albumController.getAlbumById] },
  { path: "/albums-filter", params: [albumController.getAlbumFilter] },
];

module.exports = { albumRoutes };
