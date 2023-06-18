import express from 'express';
import { CowController } from './cow.controller';
const router = express.Router();

//user create here
router.post('/', CowController.createCowData);

//get single cow
router.get('/:id', CowController.getSingleCow);

//update user to DB
router.patch('/:id', CowController.updateCow);

//delete user From DB
router.delete('/:id', CowController.deleteCow);

//collect call all cow data from DB
router.get('/', CowController.getCowCollections);

export const CowRoutes = router;
