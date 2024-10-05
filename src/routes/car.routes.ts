import CarController from '../api/controllers/carController';
import { Router } from 'express';

const carRouter = Router();
const carController = new CarController();

carRouter.post('/', carController.create);
carRouter.get('/', carController.list);
carRouter.get('/:id', carController.show);
carRouter.put('/:id', carController.update);
carRouter.delete('/:id', carController.delete);
carRouter.patch('/:id', carController.updateAcessory);

export default carRouter;
