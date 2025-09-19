const express = require('express');
const { seedSnacks, listSnacks, createSnack } = require('../controllers/snackController');

const router = express.Router();

router.post('/seed', seedSnacks);
router.get('/', listSnacks);
router.post('/', createSnack);

module.exports = router;

