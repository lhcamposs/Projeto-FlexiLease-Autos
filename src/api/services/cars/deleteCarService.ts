import CarModel from '@/api/models/car.model';
import { AppDataSource } from '@/database/data-source';

class DeleteCarService {
  public async execute(id: number): Promise<void> {
    const carRepository = AppDataSource.getRepository(CarModel);

    const car = await carRepository.findOneBy({ id });

    if (!car) {
      throw new Error('Carro não encontrado.');
    }

    await carRepository.remove(car);
  }
}

export default DeleteCarService;
