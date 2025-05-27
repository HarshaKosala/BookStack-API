const AppError = require('../utils/AppError');

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            status: err.status,
            error: err.message
        });
    }

    // Handle Joi validation errors
    if (err.isJoi) {
        return res.status(400).json({
            status: 'fail',
            error: err.details.map(detail => detail.message).join(', ')
        });
    }

    // Handle other errors
    res.status(500).json({
        status: 'error',
        error: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
    });
};

module.exports = errorHandler; 