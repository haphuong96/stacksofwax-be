const jwt = require("jsonwebtoken");
const createError = require("http-errors");

function validateBodyGuard(schema) {
  return (req, res, next) => {
    const body = req.body;
    const rs = schema.validate(body);
    if (rs?.error?.details) {
      const detail = rs.error.details.map((error) => error.message).join("\n");
      const badRequestException = new createError.BadRequest(detail);
      next(badRequestException);
      return;
    }
    next();
  };
}

module.exports = validateBodyGuard;
