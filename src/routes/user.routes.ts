import UserController from '@/api/controllers/userController';
import createUserValidator from '@/api/midlewares/createUserValidator';
import isAuthenticated from '@/api/midlewares/isAuthenticated';
import updateUserValidator from '@/api/midlewares/updateUserValidator';
import { Router } from 'express';

const userRouter = Router();
const userController = new UserController();

userRouter.post('/', createUserValidator, userController.create);
userRouter.get('/:id', isAuthenticated, userController.show);
userRouter.put(
  '/:id',
  isAuthenticated,
  updateUserValidator,
  userController.update,
);
userRouter.delete('/:id', isAuthenticated, userController.delete);

export default userRouter;
