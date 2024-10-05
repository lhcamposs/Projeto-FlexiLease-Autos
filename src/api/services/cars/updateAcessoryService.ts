import CarModel from '@/api/models/car.model';
import { AppDataSource } from '@/database/data-source';

interface IRequestAcessoriesUpdate {
  id: number;
  acessories: string[];
}

class UpdateAcessoryService {
  public async execute({
    id,
    acessories,
  }: IRequestAcessoriesUpdate): Promise<CarModel> {
    const carRepository = AppDataSource.getRepository(CarModel);
    const car = await carRepository.findOneBy({ id });

    if (!car) {
      throw new Error('Carro não encontrado');
    }

    if (!id) {
      throw new Error('Id diferente do padrão');
    }

    car.acessories = acessories;

    await carRepository.save(car);
    // const existingAcessory = car.acessories.findIndex(
    //   acessories => acessories.toLowerCase() === acessories.toLowerCase(),
    // );

    // if (existingAcessory !== -1) {
    //   car.acessories[existingAcessory] = acessories;
    // } else {
    //   car.acessories.push(acessories);
    // }

    return car;
  }
}

export default UpdateAcessoryService;
