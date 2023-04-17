const Joi = require("joi");

//follow this document: https://joi.dev/api/?v=17.9.1
const updateCollectionSchema = Joi.object({
  collection_name: Joi.string().required(),
  collection_desc: Joi.string()
});

module.exports = { updateCollectionSchema };
