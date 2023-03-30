const jwt = require('jsonwebtoken');

function authorizeUser(req, _res, next) {
    // verify token
    try {
        const authToken = req.get('Authorization');
        if (authToken) {
            jwt.verify(authToken.substring(7), process.env.SECRET_KEY, { algorithm: 'HS256', audience: 'member' });
            next();
        } else {
            throw new Error("Missing token");
        }
    } catch (err) {
        console.log(err)
        next(err);
    }
}

module.exports = authorizeUser;