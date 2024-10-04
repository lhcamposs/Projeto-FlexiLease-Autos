import { Request, Response } from 'express';
import CreateCarService from '../services/cars/createCarService';
import ListCarService from '../services/cars/listCarService';

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
    return res.json(car).status(201);
  }

  public async list(req: Request, res: Response): Promise<Response> {
    const { year, model, valuePerDay } = req.query;

    const listCars = new ListCarService();
    const cars = await listCars.execute();

    let filteredCars = cars;
    if (year) {
      filteredCars = filteredCars.filter(car => car.year === Number(year));
    }

    if (model) {
      filteredCars = filteredCars.filter(car => car.model === model);
    }

    if (valuePerDay) {
      filteredCars = filteredCars.filter(
        car => car.valuePerDay === Number(valuePerDay),
      );
    }
    return res.status(200).json({
      cars: filteredCars,
      total: filteredCars.length,
      limit: 10,
      offset: 1,
      offsets: Math.ceil(cars.length / 10),
    });
  }
}

export default CarController;
