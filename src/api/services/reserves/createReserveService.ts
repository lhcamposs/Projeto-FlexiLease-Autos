import CarModel from '@/api/models/car.model';
import ReserveModel from '@/api/models/reserve.model';
import UserModel from '@/api/models/user.model';
import { AppDataSource } from '@/database/data-source';
import { differenceInDays } from 'date-fns';

interface IRequestCreateReserve {
  startDate: Date;
  endDate: Date;
  carId: number;
  userId: number;
  finalValue: number;
}

class CreateReserveService {
  public async execute({
    startDate,
    endDate,
    carId,
    userId,
  }: IRequestCreateReserve): Promise<ReserveModel> {
    const reserveRepository = AppDataSource.getRepository(ReserveModel);
    const userRepository = AppDataSource.getRepository(UserModel);
    const carRepository = AppDataSource.getRepository(CarModel);

    const car = await carRepository.findOne({ where: { id: carId } });
    if (!car) {
      throw new Error('Carro não encontrado.');
    }

    const user = await userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new Error('User não encontrado.');
    }

    const numberOfDays = differenceInDays(endDate, startDate);
    const finalValue = car.valuePerDay * numberOfDays;
    if (finalValue == 0) {
      throw new Error('Sem valor final.');
    }

    if (!user.qualified) {
      throw new Error(
        'Usuario deve ter mais de 18 anos para efetuar a reserva',
      );
    }

    const existingReserve = reserveRepository.findOne({
      where: {
        carId,
        startDate,
        endDate,
      },
    });
    if (!existingReserve) {
      throw new Error('Já existe uma reserva nesse carro');
    }

    const reserve = await reserveRepository.create({
      startDate,
      endDate,
      carId,
      finalValue,
      userId,
    });

    await reserveRepository.save(reserve);

    return reserve;
  }
}

export default CreateReserveService;
