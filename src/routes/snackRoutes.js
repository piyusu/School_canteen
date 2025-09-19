const express = require('express');
const { seedSnacks, listSnacks } = require('../controllers/snackController');

const router = express.Router();

router.post('/seed', seedSnacks);
router.get('/', listSnacks);

module.exports = router;

