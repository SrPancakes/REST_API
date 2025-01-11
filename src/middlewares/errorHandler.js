const errorHandler = (err, req, res, next) => {
    console.error('Error:', err.stack); // Log the error stack for debugging

    const statusCode = err.status || 500;
    const message = err.message || 'Internal Server Error';

    res.status(statusCode).json({
        message,
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack }), // Show stack trace only in development
    });
};

module.exports = errorHandler;