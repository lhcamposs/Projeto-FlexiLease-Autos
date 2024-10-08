import createCarValidator from '@/api/midlewares/createCarValidator';
import CarController from '../api/controllers/carController';
import { Router } from 'express';
import updateCarValidator from '@/api/midlewares/updateCarValidator';
import isAuthenticated from '@/api/midlewares/isAuthenticated';

const carRouter = Router();
const carController = new CarController();

carRouter.post('/', isAuthenticated, createCarValidator, carController.create);
carRouter.get('/', isAuthenticated, carController.list);
carRouter.get('/:id', isAuthenticated, carController.show);
carRouter.put(
  '/:id',
  isAuthenticated,
  updateCarValidator,
  carController.update,
);
carRouter.delete('/:id', isAuthenticated, carController.delete);
carRouter.patch('/:id', isAuthenticated, carController.updateAcessory);

export default carRouter;
