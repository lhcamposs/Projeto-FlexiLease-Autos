import { Request, Response } from 'express';
import CreateReserveService from '../services/reserves/createReserveService';
import ListReserveService from '../services/reserves/listReserveService';

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
}

export default Reservecontroller;
