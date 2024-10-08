import UserModel from '@/api/models/user.model';
import CreateUserService from '@/api/services/users/createUserService';
import { AppDataSource } from '@/database/data-source';

describe('CreateUserService', () => {
  it('Deve criar um usuário com sucesso', async () => {
    const userRepository = AppDataSource.getRepository(UserModel);
    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name: 'John Doe',
      cpf: '123.456.789-00',
      birth: new Date('1990/01/01'),
      cep: '12345-678',
      email: 'john@example.com',
      password: '123456',
      qualified: true,
    });

    expect(user).toBe(user.id);

    await userRepository.delete(user.id);
  });
});
