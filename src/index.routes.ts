import { Router } from 'express';
import carRouter from './routes/car.routes';
import userRouter from './routes/user.routes';
import authRouter from './routes/auth.routes';
import reserveRouter from './routes/reserve.routes';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from 'swagger.json';

const routes = Router();

routes.use('/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
routes.use('/v1/car', carRouter);
routes.use('/v1/user', userRouter);
routes.use('/v1/auth', authRouter);
routes.use('/v1/reserve', reserveRouter);

export default routes;
