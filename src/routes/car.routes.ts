import CarController from '../api/controllers/carsController';
import { Router } from 'express';

const carRouter = Router();
const carController = new CarController();

carRouter.post('/', carController.create);
carRouter.get('/', carController.list);
carRouter.get('/:id', carController.show);
carRouter.put('/:id', carController.update);

export default carRouter;
