const Joi = require("joi");
const { getAllQuerySchema } = require("./get-query.schema");

//follow this document: https://joi.dev/api/?v=17.9.1
const getAllAlbumsQuerySchema = Joi.object({
  decade: Joi.number().integer(),
  genreId: Joi.alternatives().try(
    Joi.array().items(Joi.number().integer()),
    Joi.number().integer()
  ).custom((value, _helpers) => {
    if (typeof value === "number") {
        return [value];
    }
    return value;
  }, "genre query transformation"),
  availableToAddToCollectionId: Joi.number().integer()
}).concat(getAllQuerySchema);

module.exports = { getAllAlbumsQuerySchema };
