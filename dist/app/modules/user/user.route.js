'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require('express'));
const user_controller_1 = require('./user.controller');
const router = express_1.default.Router();
//user create here
router.post('/signup', user_controller_1.UserController.createUser);
//collect one user from DB
router.get('/:id', user_controller_1.UserController.getSingleUser);
//update user to DB
router.patch('/:id', user_controller_1.UserController.updateUser);
//delete user From DB
router.delete('/:id', user_controller_1.UserController.deleteUser);
//collect all user from DB
router.get('/', user_controller_1.UserController.getAllUsers);
exports.UserRoutes = router;
