const userService = require('../services/user.service');

async function registerUser(req, res, next) {
    try {
        const userData = req.body;

        const newUserCreated = await userService.createUser(userData);

        res.status(201).send(newUserCreated);

    } catch (err) {
        next(err);
    }
}

async function login(req, res, next) {
    try {
        const userData = req.body;

        const token = await userService.authenticate(userData);

        res.status(200).send({access_token: token});
    } catch (err) {
        next(err);
    }
}

module.exports = {
    registerUser,
    login
};