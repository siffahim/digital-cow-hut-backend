import express from 'express';
import { UserController } from './user.controller';
const router = express.Router();

//user create here
router.post('/signup', UserController.createUser);

//collect one user from DB
router.get('/:id', UserController.getSingleUser);

//update user to DB
router.patch('/:id', UserController.updateUser);

//delete user From DB
router.delete('/:id', UserController.deleteUser);

//collect all user from DB
router.get('/', UserController.getAllUsers);

export const UserRoutes = router;
