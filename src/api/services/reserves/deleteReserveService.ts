import ReserveModel from '@/api/models/reserve.model';
import UserModel from '@/api/models/user.model';
import { AppDataSource } from '@/database/data-source';

interface IRequestDeleteReserve {
  id: number;
  userId: number;
}

class DeleteReserveService {
  public async execute({ id, userId }: IRequestDeleteReserve): Promise<void> {
    const reserveRepository = AppDataSource.getRepository(ReserveModel);
    const userRepository = AppDataSource.getRepository(UserModel);

    const user = await userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new Error('Usuário não encontrado.');
    }

    const reserve = await reserveRepository.findOneBy({ id });

    if (!reserve) {
      throw new Error('Carro não encontrado.');
    }

    // if (reserve.userId !== userId) {
    //   throw new Error(
    //     'Usuario não tem permissão para excluir reservea de outro usuario',
    //   );
    // }

    await reserveRepository.remove(reserve);
  }
}

export default DeleteReserveService;
