const jwt = require('jsonwebtoken');
const createError = require('http-errors');

function authorizeUser(req, _res, next) {
    const authToken = req.get('Authorization');

    try {
        const decoded = jwt.verify(authToken.substring(7), process.env.SECRET_KEY, { algorithm: 'HS256', audience: 'member' });
        req.tokenDecoded = decoded;
        next();
    } catch (err) {
        const unauthorizedException = new createError.Unauthorized("Unauthorized access.");
        next(unauthorizedException);
    }

}

module.exports = authorizeUser;