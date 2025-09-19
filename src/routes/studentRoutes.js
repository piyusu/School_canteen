const express = require('express');
const { createStudent, getStudent } = require('../controllers/studentController');

const router = express.Router();

router.post('/', createStudent);
router.get('/:id', getStudent);

module.exports = router;

