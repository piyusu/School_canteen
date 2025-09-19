const mongoose = require('mongoose');

const snackSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    ordersCount: { type: Number, default: 0 }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Snack', snackSchema);

