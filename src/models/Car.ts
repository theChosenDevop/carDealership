import { Document, Schema, model, Model } from 'mongoose';

export interface ICar extends Document {
    name: string;
    brand: string;
    year: number;
    color: string;
    price: number;
    isSold: boolean;
    managerId: Schema.Types.ObjectId;
    customerId?: Schema.Types.ObjectId;
}

const carSchema = new Schema<ICar>({
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
    type: Schema.Types.ObjectId, ref: 'Manager'
  },
  customerId: { 
    type: Schema.Types.ObjectId, ref: 'Customer'
  }
}, { timestamps: true });

export const Car: Model<ICar> = model<ICar>('Car', carSchema);
