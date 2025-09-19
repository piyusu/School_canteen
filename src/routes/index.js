const express = require('express');
const snackRoutes = require('./snackRoutes');
const { seedSnacks } = require('../controllers/snackController');
const studentRoutes = require('./studentRoutes');
const orderRoutes = require('./orderRoutes');

const router = express.Router();

router.use('/snacks', snackRoutes);
router.use('/students', studentRoutes);
router.use('/orders', orderRoutes);

// Top-level seed endpoint as per spec
router.post('/seed', seedSnacks);

module.exports = router;

