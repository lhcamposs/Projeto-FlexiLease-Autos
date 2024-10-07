import UserModel from '@/api/models/user.model';
import { AppDataSource } from '@/database/data-source';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface IRequestAuth {
  email: string;
  password: string;
}

interface IResponse {
  accessToken: string;
}

class AuthService {
  public async execute({ email, password }: IRequestAuth): Promise<IResponse> {
    const userRepository = AppDataSource.getRepository(UserModel);
    const user = await userRepository.findOne({ where: { email } });

    if (!user) {
      throw new Error('Combimação de email/senha erradas.');
    }

    const passwordConfirmed = await compare(password, user.password);
    if (!passwordConfirmed) {
      throw new Error('Combimação de email/senha erradas.');
    }

    const token = sign({}, '0ba730c4fe29a5047f7a84a220c4225e', {
      subject: user.id.toString(),
      expiresIn: '1d',
    });

    return {
      accessToken: token,
    };
  }
}

export default AuthService;
