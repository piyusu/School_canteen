const Order = require('../models/Order');
const asyncHandler = require('../utils/asyncHandler');

exports.createOrder = asyncHandler(async (req, res) => {
  const { studentId, snackId, quantity } = req.body;
  if (!studentId || !snackId || quantity == null) {
    return res.status(400).json({ message: 'studentId, snackId, quantity are required' });
  }
  const order = await Order.create({ student: studentId, snack: snackId, quantity });
  res.status(201).json(order);
});

