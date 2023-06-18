import { SortOrder } from 'mongoose';
import { PaginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/error';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { ICow } from './cow.interface';
import { Cow } from './cow.model';

const createCowDataToDB = async (payload: ICow): Promise<ICow> => {
  const result = await Cow.create(payload);
  return result;
};

type ICowFilters = {
  searchTerm?: string;
  maxPrice?: string;
  minPrice?: string;
};

const getCowCollectionsFromDB = async (
  filters: ICowFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<ICow[]>> => {
  const { limit, skip, sortBy, sortOrder, page } =
    PaginationHelpers.calculatePagination(paginationOptions);
  const cowSearchFields = ['location', 'breed', 'category'];

  const { searchTerm, maxPrice, minPrice, ...filtersData } = filters;

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: cowSearchFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  }

  //filtering
  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const miPrice = Number(minPrice);
  const maPrice = Number(maxPrice);

  if (minPrice && maxPrice) {
    andConditions.push({
      price: { $gte: miPrice, $lte: maPrice },
    });
  }

  //sorting.....
  const sortConditions: { [key: string]: SortOrder } = {};
  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  const whereCondition =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await Cow.find(whereCondition)
    .populate('seller')
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);
  const total = await Cow.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

//single cow collect from DB
const getSingleCowFromDB = async (id: string): Promise<ICow | null> => {
  const result = await Cow.findById(id).populate('seller');
  return result;
};

const updateCowToDB = async (
  id: string,
  payload: Partial<ICow>
): Promise<ICow | null> => {
  const result = await Cow.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteCowFromDB = async (id: string): Promise<ICow | null> => {
  const result = await Cow.findByIdAndDelete(id);
  return result;
};

export const CowService = {
  createCowDataToDB,
  getCowCollectionsFromDB,
  getSingleCowFromDB,
  updateCowToDB,
  deleteCowFromDB,
};
