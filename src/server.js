require('dotenv').config();
const app = require('./app');
const { connectDB } = require('./config/db');

const port = process.env.PORT || 4000;

(async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server listening on http://localhost:${port}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
})();

