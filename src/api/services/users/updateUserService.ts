import UserModel from '@/api/models/user.model';
import { AppDataSource } from '@/database/data-source';
import { compare, hash } from 'bcryptjs';
import { differenceInYears } from 'date-fns';

interface IRequestUpdateUser {
  id: number;
  name: string;
  cpf: string;
  birth: Date;
  cep: string;
  email: string;
  password?: string;
  old_password?: string;
  qualified: boolean;
}

class UpdateUserService {
  public async execute({
    id,
    name,
    cpf,
    birth,
    cep,
    email,
    password,
    old_password,
  }: IRequestUpdateUser): Promise<UserModel | null> {
    const userRepository = AppDataSource.getRepository(UserModel);
    const user = await userRepository.findOneBy({ id });

    if (!user) {
      throw new Error('Carro não encontrado');
    }

    if (!id) {
      throw new Error('Id diferente do padrão');
    }

    const userUpdateEmail = await userRepository.findOne({ where: { email } });

    if (userUpdateEmail && userUpdateEmail.id !== user.id) {
      throw new Error('Já existe alguem com esse email.');
    }

    if (password && !old_password) {
      throw new Error('É necessario a senha antiga');
    }

    if (password && old_password) {
      const checkOldPassword = await compare(old_password, user.password);

      if (!checkOldPassword) {
        throw new Error('Senha antiga não esta correta');
      }

      user.password = await hash(password, 8);
    }

    const age = differenceInYears(new Date(), birth);

    const qualified = age >= 18;

    user.name = name;
    user.cpf = cpf;
    user.birth = birth;
    user.cep = cep;
    user.qualified = qualified;

    await userRepository.save(user);

    return user;
  }
}

export default UpdateUserService;
