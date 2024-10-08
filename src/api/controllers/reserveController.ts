import { Request, Response } from 'express';
import CreateReserveService from '../services/reserves/createReserveService';
import ListReserveService from '../services/reserves/listReserveService';
import ShowReserveService from '../services/reserves/showReserveService';
import UpdateReserveService from '../services/reserves/updateReserveService';
import DeleteReserveService from '../services/reserves/deleteReserveService';

class Reservecontroller {
  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const { startDate, endDate, carId, finalValue } = req.body;

      const { id: userId } = req.user;

      const createReserve = new CreateReserveService();
      const reserve = await createReserve.execute({
        startDate,
        endDate,
        carId,
        finalValue,
        userId: Number(userId),
      });

      return res.status(201).json(reserve);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  public async list(req: Request, res: Response): Promise<Response> {
    try {
      const { finalValue } = req.query;

      const listReserves = new ListReserveService();
      const reserves = await listReserves.execute();

      let filteredReserves = reserves;

      if (finalValue) {
        filteredReserves = filteredReserves.filter(
          car => car.finalValue === Number(finalValue),
        );
      }
      return res.status(200).json({
        filteredReserves,
        total: filteredReserves.length,
        limit: 10,
        offset: 1,
        offsets: Math.ceil(reserves.length / 10),
      });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  public async show(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      if (!/^\d+$/.test(id)) {
        return res.status(400).json({ error: 'Id diferente do padrao' });
      }

      if (!id) {
        return res.status(404).json({ error: 'Carro não encontrado' });
      }

      const showReserve = new ShowReserveService();

      const reserve = await showReserve.execute(Number(id));

      return res.status(200).json(reserve);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    try {
      const { startDate, endDate, finalValue, carId } = req.body;
      const { id } = req.params;
      const { id: userId } = req.user;

      if (!/^\d+$/.test(id)) {
        return res.status(400).json({ error: 'Id diferente do padrao' });
      }

      if (!id) {
        return res.status(404).json({ error: 'Reserva não encontrado' });
      }

      const updateReserve = new UpdateReserveService();
      const reserveId = Number(id);
      const reserve = await updateReserve.execute({
        id: reserveId,
        startDate,
        endDate,
        finalValue,
        carId,
        userId: userId,
      });

      return res.status(200).json(reserve);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      const userId = req.user.id;

      if (!/^\d+$/.test(id)) {
        return res.status(400).json({ error: 'Id diferente do padrao' });
      }

      if (!id) {
        return res.status(404).json({ error: 'Caro não encontrado' });
      }

      const deleteCar = new DeleteReserveService();

      await deleteCar.execute({ id: Number(id), userId });

      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default Reservecontroller;
