import CarModel from '@/api/models/car.model';
import ReserveModel from '@/api/models/reserve.model';
import UserModel from '@/api/models/user.model';
import { AppDataSource } from '@/database/data-source';

interface IRequestUpdateReserve {
  id: number;
  startDate: Date;
  endDate: Date;
  finalValue: number;
  carId: number;
  userId: number;
}

class UpdateReserveService {
  public async execute({
    id,
    startDate,
    endDate,
    finalValue,
    carId,
    userId,
  }: IRequestUpdateReserve): Promise<ReserveModel> {
    const reserveRepository = AppDataSource.getRepository(ReserveModel);
    const carRepository = AppDataSource.getRepository(CarModel);
    const userRepository = AppDataSource.getRepository(UserModel);

    const reserve = await reserveRepository.findOneBy({ id });

    if (!reserve) {
      throw new Error('Reserva não encontrada.');
    }

    const car = await carRepository.findOne({ where: { id: carId } });
    if (!car) {
      throw new Error('Carro não encontrado.');
    }

    const user = await userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new Error('User não encontrado.');
    }

    reserve.startDate = startDate;
    reserve.endDate = endDate;
    reserve.finalValue = finalValue;
    reserve.carId = carId;
    reserve.userId = userId;

    await reserveRepository.save(reserve);

    return reserve;
  }
}

export default UpdateReserveService;
