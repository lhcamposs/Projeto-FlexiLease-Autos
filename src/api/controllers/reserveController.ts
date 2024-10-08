import { Request, Response } from 'express';
import CreateReserveService from '../services/reserves/createReserveService';

class Reservecontroller {
  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const { startDate, endDate, carId, finalValue } = req.body;
      const userId = parseInt(req.params.userId);

      const createReserve = new CreateReserveService();
      const reserve = await createReserve.execute({
        startDate,
        endDate,
        finalValue,
        carId,
        userId,
      });

      return res.status(201).json(reserve);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default Reservecontroller;
