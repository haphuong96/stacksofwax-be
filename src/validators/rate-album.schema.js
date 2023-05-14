const Joi = require("joi");

const rateAlbumSchema = Joi.object({
  rating: Joi.number().integer().min(1).max(5)
});

module.exports = { rateAlbumSchema };
