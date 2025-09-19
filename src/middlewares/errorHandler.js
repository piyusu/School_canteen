function errorHandler(err, req, res, next) {
  // Mongoose validation and cast errors normalization
  const status = err.statusCode || (err.name === 'ValidationError' ? 400 : 500);
  const message = err.message || 'Internal Server Error';
  const errors = [];

  if (err.name === 'ValidationError' && err.errors) {
    for (const key of Object.keys(err.errors)) {
      errors.push(err.errors[key].message);
    }
  }

  if (err.name === 'CastError') {
    return res.status(400).json({ message: `Invalid ${err.path}: ${err.value}` });
  }

  res.status(status).json({ message, ...(errors.length ? { errors } : {}) });
}

module.exports = errorHandler;

