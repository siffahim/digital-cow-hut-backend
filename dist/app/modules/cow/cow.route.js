'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.CowRoutes = void 0;
const express_1 = __importDefault(require('express'));
const cow_controller_1 = require('./cow.controller');
const router = express_1.default.Router();
//user create here
router.post('/', cow_controller_1.CowController.createCowData);
// //collect one user from DB
// router.get('/:id', UserController.getSingleUser);
// //update user to DB
// router.patch('/:id', UserController.updateUser);
// //delete user From DB
// router.delete('/:id', UserController.deleteUser);
// //collect all user from DB
// router.get('/', UserController.getAllUsers);
exports.CowRoutes = router;
