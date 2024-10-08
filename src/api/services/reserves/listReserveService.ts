import ReserveModel from '@/api/models/reserve.model';
import { AppDataSource } from '@/database/data-source';

class ListReserveService {
  public async execute(): Promise<ReserveModel[]> {
    const reserveRepository = AppDataSource.getRepository(ReserveModel);
    const reserves = await reserveRepository.find({
      select: {
        id: true,
        startDate: true,
        endDate: true,
        finalValue: true,
        userId: true,
        carId: true,
      },
    });

    if (!reserves) {
      throw new Error('A lista está vazia');
    }

    return reserves;
  }
}

export default ListReserveService;
