const mongoose = require('mongoose');

function generateReferral() {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let suffix = '';
  for (let i = 0; i < 5; i += 1) {
    suffix += charset[Math.floor(Math.random() * charset.length)];
  }
  return `EDZ${suffix}`;
}

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    referralCode: { type: String, unique: true, index: true },
    totalSpent: { type: Number, default: 0 },
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }]
  },
  { timestamps: true }
);

// pre-save: auto-generate referralCode if missing
studentSchema.pre('save', function preSave(next) {
  if (!this.referralCode) {
    this.referralCode = generateReferral();
  }
  next();
});

module.exports = mongoose.model('Student', studentSchema);

