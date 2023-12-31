import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routers from './routers';
const app: Application = express();

//application middleware & parser
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//application routes
app.use('/api/v1', routers);

//Testing route
// app.get('/', async (req: Request, res: Response, next) => {
//   //throw new ApiError('Ore baba error', 409);
//   Promise.reject('Unhandled Rejection');
// });

//global error handle
app.use(globalErrorHandler);

//not found route
app.use((req: Request, res: Response) => {
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

export default app;
