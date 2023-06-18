'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const cors_1 = __importDefault(require('cors'));
const express_1 = __importDefault(require('express'));
const globalErrorHandler_1 = __importDefault(
  require('./app/middlewares/globalErrorHandler')
);
const cow_route_1 = require('./app/modules/cow/cow.route');
const user_route_1 = require('./app/modules/user/user.route');
const app = (0, express_1.default)();
//application middleware & parser
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//application routes
app.use('/api/v1/auth', user_route_1.UserRoutes);
app.use('/api/v1/users', user_route_1.UserRoutes);
app.use('/api/v1/cows', cow_route_1.CowRoutes);
//Testing route
// app.get('/', async (req: Request, res: Response, next) => {
//   //throw new ApiError('Ore baba error', 409);
//   Promise.reject('Unhandled Rejection');
// });
//global error handle
app.use(globalErrorHandler_1.default);
//not found route
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'Api not found',
      },
    ],
  });
});
exports.default = app;
