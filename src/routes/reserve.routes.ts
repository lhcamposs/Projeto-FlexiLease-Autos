import Reservecontroller from '@/api/controllers/reserveController';
import createReserveValidator from '@/api/midlewares/createReserveValidator';
import isAuthenticated from '@/api/midlewares/isAuthenticated';
import updateReserveValidator from '@/api/midlewares/updateReserveValidator';
import { Router } from 'express';

const reserveRouter = Router();
const reserveController = new Reservecontroller();

reserveRouter.post(
  '/',
  isAuthenticated,
  createReserveValidator,
  reserveController.create,
);
reserveRouter.get('/', isAuthenticated, reserveController.list);
reserveRouter.get('/:id', isAuthenticated, reserveController.show);
reserveRouter.put(
  '/:id',
  isAuthenticated,
  updateReserveValidator,
  reserveController.update,
);
reserveRouter.delete('/:id', isAuthenticated, reserveController.delete);

export default reserveRouter;
