const Joi = require("joi");
//follow this document: https://joi.dev/api/?v=17.9.1
const getAllQuerySchema = Joi.object({
  search: Joi.string().allow(""),
  sort: Joi.string(),
  limit: Joi.number().required(),
  offset: Joi.number().required()
});

module.exports = { getAllQuerySchema };
