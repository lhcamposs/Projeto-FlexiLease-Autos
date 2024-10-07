import UserModel from '@/api/models/user.model';
import { AppDataSource } from '@/database/data-source';
import { compare } from 'bcryptjs';
import { sign, Secret } from 'jsonwebtoken';
import authConfig from '../../utils/auth';

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

    const token = sign({}, authConfig.jwt.secret as Secret, {
      subject: user.id.toString(),
      expiresIn: authConfig.jwt.expiresIn,
    });

    return {
      accessToken: token,
    };
  }
}

export default AuthService;
