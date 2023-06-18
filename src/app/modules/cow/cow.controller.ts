import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { CowService } from './cow.service';

const createCowData = catchAsync(async (req: Request, res: Response) => {
  const { ...cowData } = req.body;
  const result = await CowService.createCowDataToDB(cowData);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Cow created successfully',
    data: result,
  });
});

export const CowController = {
  createCowData,
};
