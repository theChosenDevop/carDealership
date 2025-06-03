import { Document, model, Model, Schema, Types } from 'mongoose';

export interface IManager extends Document {
  userId: Types.ObjectId;
  company: string;
  stock: number;
  managedCars: Types.ObjectId[];
}

const managerSchema = new Schema<IManager>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },
  company: { type: String, required: true },
  stock: { type: Number },
  managedCars: [{ type: Schema.Types.ObjectId, ref: 'Car' }],
}, { timestamps: true });

export const Manager: Model<IManager> = model<IManager>('Manager', managerSchema);
