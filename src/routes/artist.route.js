const express = require("express");
const router = express.Router();
const validator = require("../middlewares/schema-validator.middleware");
const { getAllQuerySchema } = require("../validators/get-query.schema");
const artistController = require("../controllers/artist.controller");


router.get("/artists", validator(getAllQuerySchema, "query"), artistController.getAllArtist);
router.get("/artists/:artistId", artistController.getArtistById);

module.exports = router;