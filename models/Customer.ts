import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  phone: String,
  address: String,
  preferredBrands: [String],
  purchasedCars: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Car' }
  ],
  budgetRange: {
    min: Number,
    max: Number,
  }
}, { timestamps: true });

module.exports = mongoose.model('Customer', customerSchema);
