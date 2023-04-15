const userService = require('../services/user.service');
const userSerializer = require('../serializers/user.serializer');

async function registerUser(req, res, next) {
    try {
        const userData = req.body;

        const newUserCreated = await userService.createUser(userData);

        const serializedUser = userSerializer.transformUser(newUserCreated);

        res.status(201).send(serializedUser);

    } catch (err) {
        next(err);
    }
}

async function login(req, res, next) {
    try {
        const userData = req.body;

        const auth = await userService.authenticate(userData);
        
        res.status(200).send(auth);
    } catch (err) {
        next(err);
    }
}

async function getMe(req, res, next) {
    try {
        const userId = req.tokenDecoded.userId;

        const user = await userService.getUserById(userId);

        const serializedUser = userSerializer.transformUser(user);

        res.status(200).send(serializedUser);
    } catch (err) {
        console.log(err)
        next(err);
    }
}

module.exports = {
    registerUser,
    login,
    getMe
};