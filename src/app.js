const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.json({ status: 'ok', service: 'canteen-manager' });
});

app.use('/', routes);

app.use(errorHandler);

module.exports = app;

