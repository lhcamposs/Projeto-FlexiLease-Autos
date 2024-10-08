import Reservecontroller from '@/api/controllers/reserveController';
import isAuthenticated from '@/api/midlewares/isAuthenticated';
import { Router } from 'express';

const reserveRouter = Router();
const reserveController = new Reservecontroller();

reserveRouter.post('/', isAuthenticated, reserveController.create);
reserveRouter.get('/', isAuthenticated, reserveController.list);
reserveRouter.get('/:id', isAuthenticated, reserveController.show);
reserveRouter.put('/:id', isAuthenticated, reserveController.update);
reserveRouter.delete('/:id', isAuthenticated, reserveController.delete);

export default reserveRouter;
