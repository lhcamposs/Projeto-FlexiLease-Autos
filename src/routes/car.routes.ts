import CarController from '../api/controllers/carsController';
import { Router } from 'express';

const carRouter = Router();
const carController = new CarController();

carRouter.post('/', carController.create);

export default carRouter;
