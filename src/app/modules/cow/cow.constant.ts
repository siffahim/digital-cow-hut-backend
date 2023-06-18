import { Breed, Category, CowLabel, location } from './cow.interface';

export const cowLocations: location[] = [
  'Dhaka',
  'Chattogram',
  'Barishal',
  'Rajshahi',
  'Sylhet',
  'Comilla',
  'Rangpur',
  'Mymensingh',
];
export const breed: Breed[] = [
  'Brahman',
  'Nellore',
  'Sahiwal',
  'Gir',
  'Indigenous',
  'Tharparkar',
  'Kankrej',
];

export const cowLabel: CowLabel[] = ['for sale', 'sold out'];

export const category: Category[] = ['Dairy', 'Beef', 'DualPurpose'];
