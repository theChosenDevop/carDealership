import mongoose from 'mongoose';

const managerSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  company: { type: String, required: true },
  stock: { type: Number },
  managedCars: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Car' }
  ],
}, { timestamps: true });

module.exports = mongoose.model('Manager', managerSchema);