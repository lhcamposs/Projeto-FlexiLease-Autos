import ReserveModel from '@/api/models/reserve.model';
import { AppDataSource } from '@/database/data-source';

class ShowReserveService {
  public async execute(id: number): Promise<ReserveModel> {
    const reserveRepository = AppDataSource.getRepository(ReserveModel);

    const reserve = await reserveRepository.findOne({
      where: { id },
    });

    if (!reserve) {
      throw new Error('Reserva não encontrada!');
    }

    return reserve;
  }
}

export default ShowReserveService;
