const Joi = require("joi");

//follow this document: https://joi.dev/api/?v=17.9.1
const updateCollectionSchema = Joi.object({
  collection_name: Joi.string().required().min(1).max(100),
  collection_desc: Joi.string().max(2000)
});

module.exports = { updateCollectionSchema };
