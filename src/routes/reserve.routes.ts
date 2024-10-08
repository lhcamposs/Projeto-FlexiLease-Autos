import Reservecontroller from '@/api/controllers/reserveController';
import isAuthenticated from '@/api/midlewares/isAuthenticated';
import { Router } from 'express';

const reserveRouter = Router();
const reserveController = new Reservecontroller();

reserveRouter.post('/', isAuthenticated, reserveController.create);
reserveRouter.get('/', reserveController.list);
// reserveRouter.put('/:id', reserveController);
// reserveRouter.delete('/:id', reserveController);

export default reserveRouter;
