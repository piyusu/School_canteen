const Student = require('../models/Student');
const asyncHandler = require('../utils/asyncHandler');

exports.createStudent = asyncHandler(async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: 'name is required' });
  }
  const student = await Student.create({ name });
  res.status(201).json(student);
});

exports.getStudent = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const student = await Student.findById(id)
    .populate({
      path: 'orders',
      populate: { path: 'snack', select: 'title price' },
      select: 'quantity payableAmount createdAt'
    });

  if (!student) {
    return res.status(404).json({ message: 'Student not found' });
  }
  res.json(student);
});

