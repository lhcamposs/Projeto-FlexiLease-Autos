import { Request, Response } from 'express';
import CreateCarService from '../services/cars/createCarService';
import ListCarService from '../services/cars/listCarService';
import ShowCarService from '../services/cars/showCarService';
import UpdateCarService from '../services/cars/updateCarSevice';
import DeleteCarService from '../services/cars/deleteCarService';
import UpdateAcessoryService from '../services/cars/updateAcessoryService';

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
    return res.status(201).json(car);
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

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const showCar = new ShowCarService();

    const car = await showCar.execute(Number(id));

    return res.status(200).json(car);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { model, year, valuePerDay, acessories, numberOfPassengers } =
      req.body;
    const { id } = req.params;

    const updateCar = new UpdateCarService();
    const carId = Number(id);
    const car = await updateCar.execute({
      id: carId,
      model,
      year,
      valuePerDay,
      acessories,
      numberOfPassengers,
    });

    return res.status(200).json(car);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deleteCar = new DeleteCarService();

    await deleteCar.execute(Number(id));

    return res.status(204).send();
  }

  public async updateAcessory(req: Request, res: Response): Promise<Response> {
    const { acessories } = req.body;

    const { id } = req.params;

    const updateAcessory = new UpdateAcessoryService();
    const carId = Number(id);
    const car = await updateAcessory.execute({
      id: carId,
      acessories,
    });

    return res.json(car).status(200).send();
  }
}

export default CarController;
