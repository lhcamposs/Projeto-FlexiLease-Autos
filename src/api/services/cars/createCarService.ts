import CarModel from '@/api/models/car.model';
import { AppDataSource } from '@/database/data-source';

interface IRequestCreateCar {
  model: string;
  year: number;
  valuePerDay: number;
  acessories: string[];
  numberOfPassengers: number;
}

class CreateCarService {
  public async execute({
    model,
    year,
    valuePerDay,
    acessories,
    numberOfPassengers,
  }: IRequestCreateCar): Promise<CarModel> {
    const carRepository = AppDataSource.getRepository(CarModel);
    const car = await carRepository.create({
      model,
      year,
      valuePerDay,
      acessories,
      numberOfPassengers,
    });

    await carRepository.save(car);

    return car;
  }
}

export default CreateCarService;
