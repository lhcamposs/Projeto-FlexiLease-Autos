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

    if (year > 1950 && year < 2023) {
      throw new Error('Ano do carro não compativel');
    }

    if (!acessories || acessories.length === 0) {
      throw new Error('É necessario ter pelo menos um acessorio');
    }

    const uniqueAcessories = [...new Set(acessories)];
    if (uniqueAcessories.length !== acessories.length) {
      throw new Error('Não pode haver acessorios repetidos');
    }

    const car = await carRepository.create({
      model,
      year,
      valuePerDay,
      acessories: uniqueAcessories,
      numberOfPassengers,
    });

    await carRepository.save(car);

    return car;
  }
}

export default CreateCarService;
