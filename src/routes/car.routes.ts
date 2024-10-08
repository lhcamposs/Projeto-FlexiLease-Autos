import createCarValidator from '@/api/midlewares/createCarValidator';
import CarController from '../api/controllers/carController';
import { Router } from 'express';
import updateCarValidator from '@/api/midlewares/updateCarValidator';

const carRouter = Router();
const carController = new CarController();

carRouter.post('/', createCarValidator, carController.create);
carRouter.get('/', carController.list);
carRouter.get('/:id', carController.show);
carRouter.put('/:id', updateCarValidator, carController.update);
carRouter.delete('/:id', carController.delete);
carRouter.patch('/:id', carController.updateAcessory);

export default carRouter;
