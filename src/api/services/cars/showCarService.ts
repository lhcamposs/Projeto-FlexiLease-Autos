import CarModel from '@/api/models/car.model';
import { AppDataSource } from '@/database/data-source';

class ShowCarService {
  public async execute(id: number): Promise<CarModel> {
    const carRepository = AppDataSource.getRepository(CarModel);

    const car = await carRepository.findOne({
      where: { id },
    });

    if (!car) {
      throw new Error('Carro não encontrado!');
    }

    return car;
  }
}

export default ShowCarService;
