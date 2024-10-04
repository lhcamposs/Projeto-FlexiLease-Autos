import CarModel from '@/api/models/car.model';
import { AppDataSource } from '@/database/data-source';

class ListCarService {
  public async execute(): Promise<CarModel[]> {
    const carRepository = AppDataSource.getRepository(CarModel);
    const cars = await carRepository.find({
      select: {
        id: true,
        model: true,
        year: true,
        valuePerDay: true,
        acessories: true,
        numberOfPassengers: true,
      },
    });

    if (!cars) {
      throw new Error('A lista está vazia');
    }

    return cars;
  }
}

export default ListCarService;
