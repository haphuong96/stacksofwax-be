const errorHandler = (err, req, res, next) => {
    const errStatus = err.statusCode || 500;
    const errMsg = err.message || 'Unknown error';
    res.status(errStatus).send({
        success: false,
        message: errMsg
    });
};

module.exports = errorHandler;
