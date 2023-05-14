const createError = require("http-errors");

function schemaValidator(schema, property) {
  return (req, res, next) => {
    const rs = schema.validate(req[property]);
    if (rs?.error?.details) {
      const detail = rs.error.details.map((error) => error.message).join("\n");
      const badRequestException = new createError.BadRequest(detail);
      next(badRequestException);
      return;
    }

    req[property] = rs.value;
    next();
  };
}

module.exports = schemaValidator;
