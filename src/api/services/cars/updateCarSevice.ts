import CarModel from '@/api/models/car.model';
import { AppDataSource } from '@/database/data-source';

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
      throw new Error('Carro não encontrado');
    }

    if (!id) {
      throw new Error('Id diferente do padrão');
    }

    if (year > 1950 && year < 2023) {
      throw new Error('Ano do carro não compativel');
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
