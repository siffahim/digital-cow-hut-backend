import cors from 'cors';
import express, { Application, Request, Response } from 'express';
const app: Application = express();

//application middleware & parser
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Testing route
app.get('/', (req: Request, res: Response) => {
  res.send('Digital cow hut');
});

export default app;
