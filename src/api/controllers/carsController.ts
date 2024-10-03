import { Request, Response } from 'express';
import CreateCarService from '../services/cars/createCarService';

class CarController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { model, year, valuePerDay, acessories, numberOfPassengers } =
      req.body;

    const createCar = new CreateCarService();
    const car = await createCar.execute({
      model,
      year,
      valuePerDay,
      acessories,
      numberOfPassengers,
    });
    return res.json(car);
  }
}

export default CarController;
