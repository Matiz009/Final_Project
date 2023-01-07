export const errorMiddleware = (error, req, res, next) => {
    error.message = error.message || "Internal server Error";
    error.statusCode = error.statusCode || 500;
    res.status(error.statusCode).json({
        success: false,
        message: error.message,
    });
};