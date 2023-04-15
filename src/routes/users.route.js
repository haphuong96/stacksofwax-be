const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');
const userAuthorization = require('../middlewares/auth.middleware');

router.post('/signup', userController.registerUser);
router.post('/login', userController.login);
router.get('/get-me', userAuthorization, userController.getMe);

module.exports = router;