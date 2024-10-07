import AuthController from '@/api/controllers/authController';
import { Router } from 'express';

const authRouter = Router();
const authController = new AuthController();

authRouter.post('/', authController.create);

export default authRouter;
