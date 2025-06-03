import mongoose from 'mongoose';

const carSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true 
    },
  brand: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  isSold: {
    type: Boolean, 
    default: false
  },
  managerId: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Manager'
  },
  customerId: { 
    type: mongoose.Schema.Types.ObjectId, ref: 'Customer'
  }
}, { timestamps: true });

module.exports = mongoose.model('Car', carSchema);
