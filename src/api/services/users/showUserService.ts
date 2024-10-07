import UserModel from '@/api/models/user.model';
import { AppDataSource } from '@/database/data-source';

class ShowUserService {
  public async execute(id: number): Promise<UserModel> {
    const userRepository = AppDataSource.getRepository(UserModel);

    const user = await userRepository.findOne({
      where: { id },
    });

    if (!user) {
      throw new Error('Usuario não encontrado!');
    }

    return user;
  }
}

export default ShowUserService;
