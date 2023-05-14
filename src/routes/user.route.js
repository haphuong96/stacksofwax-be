const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const userAuthorization = require("../middlewares/auth.middleware");
const signupBodySchema = require("../validators/signup-body.schema");
const validator = require("../middlewares/schema-validator.middleware");
const { getAllQuerySchema } = require("../validators/get-query.schema");

router.post(
  "/signup",
  validator(signupBodySchema, 'body'),
  userController.registerUser
);

router.post(
  "/login", 
  userController.login
);

router.get(
  "/me", 
  userAuthorization, 
  userController.getMe
);

router.get(
  "/users/:userId", 
  validator(getAllQuerySchema, 'query'), 
  userController.getUserById
);

router.post(
  "/me/profile-picture",
  userAuthorization,
  userController.updateProfileImage
);

module.exports = router;
