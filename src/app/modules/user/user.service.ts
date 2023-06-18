import { IUser } from './user.interface';
import { User } from './user.model';

const createUserToDB = async (payload: IUser): Promise<IUser | null> => {
  const result = await User.create(payload);
  return result;
};

const getAllUsersFromDB = async (): Promise<IUser[] | null> => {
  const result = await User.find();
  return result;
};

const getSingleUserFromDB = async (id: string): Promise<IUser | null> => {
  const result = await User.findById(id);
  return result;
};

const updateUserToDB = async (
  id: string,
  payload: Partial<IUser>
): Promise<IUser | null> => {
  const result = await User.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteUserToDB = async (id: string): Promise<IUser | null> => {
  const result = await User.findByIdAndDelete(id);
  return result;
};

export const UserService = {
  createUserToDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
  updateUserToDB,
  deleteUserToDB,
};
