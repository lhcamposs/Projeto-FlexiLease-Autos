import { Router } from 'express';
import carRouter from './routes/car.routes';
import userRouter from './routes/user.routes';

const routes = Router();

routes.use('/v1/car', carRouter);
routes.use('/v1/user', userRouter);

export default routes;
