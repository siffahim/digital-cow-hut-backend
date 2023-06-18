import { Schema, model } from 'mongoose';
import { breed, category, cowLabel, cowLocations } from './cow.constant';
import { CowModel, ICow } from './cow.interface';

const cowSchema = new Schema<ICow>({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
    enum: cowLocations,
  },
  breed: {
    type: String,
    required: true,
    enum: breed,
  },
  weight: {
    type: Number,
    required: true,
  },
  label: {
    type: String,
    required: true,
    enum: cowLabel,
  },
  category: {
    type: String,
    required: true,
    enum: category,
  },
  seller: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

export const Cow = model<ICow, CowModel>('Cow', cowSchema);
