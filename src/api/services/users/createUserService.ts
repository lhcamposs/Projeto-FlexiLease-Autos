import fetchAddresByCep from '@/api/midlewares/fetchAddressByCep';
import UserModel from '@/api/models/user.model';
import { AppDataSource } from '@/database/data-source';
import { hash } from 'bcryptjs';
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

    const existingCpf = await userRepository.findOne({ where: { cpf } });
    if (existingCpf) {
      throw new Error('Cpf já cadastrado');
    }

    const existingEmail = await userRepository.findOne({ where: { email } });
    if (existingEmail) {
      throw new Error('Email já cadastrado');
    }

    const hashedPassword = await hash(password, 8);

    const age = differenceInYears(new Date(), birth);

    const qualified = age >= 18;

    const userAddress = await fetchAddresByCep(cep);

    const user = userRepository.create({
      name,
      cpf,
      birth,
      cep,
      email,
      password: hashedPassword,
      qualified,
      ...userAddress,
    });

    await userRepository.save(user);

    return user;
  }
}

export default CreateUserService;
