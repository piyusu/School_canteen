const Snack = require('../models/Snack');
const asyncHandler = require('../utils/asyncHandler');

exports.seedSnacks = asyncHandler(async (req, res) => {
  const defaults = [
    { title: 'Samosa', price: 15 },
    { title: 'Idli', price: 25 },
    { title: 'Veg Puff', price: 30 }
  ];

  const inserted = await Snack.insertMany(defaults, { ordered: false });
  res.status(201).json({ message: 'Seeded snacks', snacks: inserted });
});

exports.listSnacks = asyncHandler(async (req, res) => {
  const snacks = await Snack.find().select('title price ordersCount');
  res.json(snacks);
});

