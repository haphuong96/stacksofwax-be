const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");
const userAuthorization = require("../middlewares/auth.middleware");
const validateBodyGuard = require("../middlewares/validate-body.middleware");
const signupBodySchema = require("../middlewares/body-validations/signup-body.schema");

router.post(
  "/signup",
  validateBodyGuard(signupBodySchema),
  userController.registerUser
);
router.post("/login", userController.login);
router.get("/get-me", userAuthorization, userController.getMe);

module.exports = router;
