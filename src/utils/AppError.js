class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true; // expected, handled errors (validation failures, bad requests, resource not found)

        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = AppError; 