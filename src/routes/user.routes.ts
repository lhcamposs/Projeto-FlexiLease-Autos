import UserController from '@/api/controllers/userController';
import { Router } from 'express';

const userRouter = Router();
const userController = new UserController();

userRouter.post('/', userController.create);
userRouter.get('/:id', userController.show);
userRouter.put('/:id', userController.update);

export default userRouter;
