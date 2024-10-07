import UserController from '@/api/controllers/userController';
import isAuthenticated from '@/api/midlewares/isAuthenticated';
import { Router } from 'express';

const userRouter = Router();
const userController = new UserController();

userRouter.post('/', userController.create);
userRouter.get('/:id', isAuthenticated, userController.show);
userRouter.put('/:id', isAuthenticated, userController.update);
userRouter.delete('/:id', isAuthenticated, userController.delete);

export default userRouter;
