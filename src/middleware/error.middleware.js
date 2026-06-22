import logger from "../config/logger";
function errorMiddleware(err, req, res, next) {
  logger.error(error.message);

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || 'Internal Server Error'
  });
}

export default errorMiddleware;
