import UserModel from '@/api/models/user.model';
import { AppDataSource } from '@/database/data-source';
import { differenceInYears } from 'date-fns';

interface IRequestCreateUser {
  name: string;
  cpf: string;
  birth: Date;
  cep: string;
  email: string;
  password: string;
  qualified: boolean;
}

class CreateUserService {
  public async execute({
    name,
    cpf,
    birth,
    cep,
    email,
    password,
  }: IRequestCreateUser): Promise<UserModel> {
    const userRepository = AppDataSource.getRepository(UserModel);

    const age = differenceInYears(new Date(), birth);

    const qualified = age >= 18;

    const user = userRepository.create({
      name,
      cpf,
      birth,
      cep,
      email,
      password,
      qualified,
    });

    await userRepository.save(user);

    return user;
  }
}

export default CreateUserService;
