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
//get single cow
router.get('/:id', cow_controller_1.CowController.getSingleCow);
//update user to DB
router.patch('/:id', cow_controller_1.CowController.updateCow);
//delete user From DB
router.delete('/:id', cow_controller_1.CowController.deleteCow);
//collect call all cow data from DB
router.get('/', cow_controller_1.CowController.getCowCollections);
exports.CowRoutes = router;
