const mongoose = require('mongoose');

async function connectDB(uri) {
  if (!uri) {
    throw new Error('MONGO_URI is not set');
  }

  await mongoose.connect(uri, {
    // Mongoose 8 has sane defaults; kept for clarity
    autoIndex: true
  });
  return mongoose.connection;
}

module.exports = { connectDB };

