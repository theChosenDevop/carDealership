import { Document, model, Model, Schema, Types } from 'mongoose';

interface IBudgetRange {
  min: number;
  max: number;
}

export interface ICustomer extends Document {
  userId: Types.ObjectId;
  phone?: string;
  address?: string;
  preferredBrands?: string[];
  purchasedCars?: Types.ObjectId[];
  budgetRange?: IBudgetRange;
}

const customerSchema = new Schema<ICustomer>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    phone: { type: String },
    address: { type: String },
    preferredBrands: [{ type: String }],
    purchasedCars: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Car',
      },
    ],
    budgetRange: {
      min: { type: Number },
      max: { type: Number },
    },
  },
  { timestamps: true }
);

export const Customer: Model<ICustomer> = model<ICustomer>('Customer', customerSchema);
