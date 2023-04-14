const userService = require('../services/user.service');
const userSerializer = require('../serializers/user.serializer');

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

        const auth = await userService.authenticate(userData);

        const serializedUser = userSerializer.transformUser(auth.user);
        auth.user = serializedUser;
        
        res.status(200).send(auth);
    } catch (err) {
        next(err);
    }
}

module.exports = {
    registerUser,
    login
};