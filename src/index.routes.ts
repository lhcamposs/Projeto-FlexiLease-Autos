import { Router } from 'express';
import carRouter from './routes/car.routes';

const routes = Router();

routes.use('/v1/car', carRouter);

export default routes;
