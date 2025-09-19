const Snack = require('../models/Snack');
const asyncHandler = require('../utils/asyncHandler');

exports.createSnack = asyncHandler(async (req, res) => {
  const { title, price } = req.body;
  if (!title || price == null) {
    return res.status(400).json({ message: 'title and price are required' });
  }
  const snack = await Snack.create({ title, price });
  res.status(201).json(snack);
});

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

