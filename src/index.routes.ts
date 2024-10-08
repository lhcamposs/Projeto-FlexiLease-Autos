import { Router } from 'express';
import carRouter from './routes/car.routes';
import userRouter from './routes/user.routes';
import authRouter from './routes/auth.routes';
import reserveRouter from './routes/reserve.routes';

const routes = Router();

routes.use('/v1/car', carRouter);
routes.use('/v1/user', userRouter);
routes.use('/v1/auth', authRouter);
routes.use('/v1/reserve', reserveRouter);

export default routes;
