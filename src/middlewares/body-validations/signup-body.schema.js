const Joi = require("joi");

//follow this document: https://joi.dev/api/?v=17.9.1
const signupBodySchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
});

module.exports = signupBodySchema;
