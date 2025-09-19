const mongoose = require('mongoose');
const Snack = require('./Snack');
const Student = require('./Student');

const orderSchema = new mongoose.Schema(
  {
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
    snack: { type: mongoose.Schema.Types.ObjectId, ref: 'Snack', required: true },
    quantity: { type: Number, required: true },
    payableAmount: { type: Number, required: true }
  },
  { timestamps: true }
);

// pre-validate: ensure quantity in [1,5] and compute payableAmount
orderSchema.pre('validate', async function preValidate(next) {
  try {
    if (this.quantity == null) {
      return next(new Error('Quantity is required'));
    }
    if (this.quantity < 1 || this.quantity > 5) {
      return next(new Error('Quantity must be between 1 and 5'));
    }

    if (!this.snack) {
      return next(new Error('Snack is required'));
    }
    const snackDoc = await Snack.findById(this.snack).lean();
    if (!snackDoc) {
      return next(new Error('Snack not found'));
    }
    this.payableAmount = snackDoc.price * this.quantity;
    return next();
  } catch (err) {
    return next(err);
  }
});

// post-save: update snack.ordersCount, push order into student.orders, add totalSpent
orderSchema.post('save', async function postSave(doc, next) {
  try {
    await Snack.findByIdAndUpdate(doc.snack, { $inc: { ordersCount: 1 } });

    await Student.findByIdAndUpdate(doc.student, {
      $push: { orders: doc._id },
      $inc: { totalSpent: doc.payableAmount }
    });

    next();
  } catch (err) {
    next(err);
  }
});

module.exports = mongoose.model('Order', orderSchema);

