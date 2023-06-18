import { ICow } from './cow.interface';
import { Cow } from './cow.model';

const createCowDataToDB = async (payload: ICow): Promise<ICow> => {
  const result = await Cow.create(payload);
  return result;
};

export const CowService = {
  createCowDataToDB,
};
