import UserModel from '@/api/models/user.model';
import { AppDataSource } from '@/database/data-source';

class DeleteUserService {
  public async execute(id: number): Promise<void> {
    const userRepository = AppDataSource.getRepository(UserModel);

    const user = await userRepository.findOneBy({ id });

    if (!user) {
      throw new Error('Usuario não encontrado.');
    }

    await userRepository.remove(user);
  }
}

export default DeleteUserService;
