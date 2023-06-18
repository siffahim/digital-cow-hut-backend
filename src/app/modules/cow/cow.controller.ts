import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { ICow } from './cow.interface';
import { CowService } from './cow.service';

const createCowData = catchAsync(async (req: Request, res: Response) => {
  const { ...cowData } = req.body;
  const result = await CowService.createCowDataToDB(cowData);

  sendResponse<ICow>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Cow created successfully',
    data: result,
  });
});

const getCowCollections = catchAsync(async (req: Request, res: Response) => {
  const paginationOptions = pick(req.query, [
    'page',
    'limit',
    'sortBy',
    'sortOrder',
  ]);
  const filters = pick(req.query, [
    'searchTerm',
    'mixPrice',
    'minPrice',
    'location',
  ]);

  const result = await CowService.getCowCollectionsFromDB(
    filters,
    paginationOptions
  );

  sendResponse<ICow[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    meta: result.meta,
    message: 'Cows retrieved successfully',
    data: result.data,
  });
});

const getSingleCow = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await CowService.getSingleCowFromDB(id);

  sendResponse<ICow>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Cow retrieve successfully',
    data: result,
  });
});

const updateCow = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updateData = req.body;
  const result = await CowService.updateCowToDB(id, updateData);

  sendResponse<ICow>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Cow updated successfully',
    data: result,
  });
});

const deleteCow = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await CowService.deleteCowFromDB(id);

  sendResponse<ICow>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Cow deleted successfully',
    data: result,
  });
});

export const CowController = {
  createCowData,
  getCowCollections,
  getSingleCow,
  updateCow,
  deleteCow,
};
