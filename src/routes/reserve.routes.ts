import Reservecontroller from '@/api/controllers/reserveController';
import { Router } from 'express';

const reserveRouter = Router();
const reserveController = new Reservecontroller();

reserveRouter.post('/', reserveController.create);
// reserveRouter.get('/:id', reserveController);
// reserveRouter.put('/:id', reserveController);
// reserveRouter.delete('/:id', reserveController);

export default reserveRouter;
