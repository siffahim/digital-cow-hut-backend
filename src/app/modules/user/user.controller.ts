import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IUser } from './user.interface';
import { UserService } from './user.service';

const createUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...user } = req.body;

    const result = await UserService.createUserToDB(user);

    sendResponse<IUser>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Users created successfully',
      data: result,
    });
  }
);

const getAllUsers = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.getAllUsersFromDB();

  sendResponse<IUser[]>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Users retrieve successfully',
    data: result,
  });
});

const getSingleUser = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await UserService.getSingleUserFromDB(id);

  sendResponse<IUser>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User retrieve successfully',
    data: result,
  });
});

const updateUser = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;
  const result = await UserService.updateUserToDB(id, updatedData);

  sendResponse<IUser>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User updated successfully',
    data: result,
  });
});

const deleteUser = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await UserService.deleteUserToDB(id);

  sendResponse<IUser>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User Deleted successfully',
    data: result,
  });
});

export const UserController = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
