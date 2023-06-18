import { Model, Types } from 'mongoose';

export type location =
  | 'Dhaka'
  | 'Chattogram'
  | 'Barishal'
  | 'Rajshahi'
  | 'Sylhet'
  | 'Comilla'
  | 'Rangpur'
  | 'Mymensingh';

export type Breed =
  | 'Brahman'
  | 'Nellore'
  | 'Sahiwal'
  | 'Gir'
  | 'Indigenous'
  | 'Tharparkar'
  | 'Kankrej';

export type CowLabel = 'for sale' | 'sold out';

export type Category = 'Dairy' | 'Beef' | 'DualPurpose';

export type ICow = {
  name: string;
  age: number;
  price: number;
  location: location;
  breed: Breed;
  weight: number;
  label: CowLabel;
  category: Category;
  seller: Types.ObjectId;
};

export type CowModel = Model<ICow, Record<string, unknown>>;
