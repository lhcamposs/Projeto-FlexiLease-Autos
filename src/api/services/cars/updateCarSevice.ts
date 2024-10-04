import CarModel from '@/api/models/car.model';
import { AppDataSource } from '@/database/data-source';
import { error } from 'console';

interface IRequestUpdateCar {
  id: number;
  model: string;
  year: number;
  valuePerDay: number;
  acessories: string[];
  numberOfPassengers: number;
}

class UpdateCarService {
  public async execute({
    id,
    model,
    year,
    valuePerDay,
    acessories,
    numberOfPassengers,
  }: IRequestUpdateCar): Promise<CarModel | null> {
    const carRepository = AppDataSource.getRepository(CarModel);
    const car = await carRepository.findOneBy({ id });

    if (!car) {
      throw new error('Carro não encontrado', 404);
    }

    if (!id) {
      throw new error('Id diferente do padrão', 404);
    }

    car.model = model;
    car.year = year;
    car.valuePerDay = valuePerDay;
    car.acessories = acessories;
    car.numberOfPassengers = numberOfPassengers;

    await carRepository.save(car);

    return car;
  }
}

export default UpdateCarService;
