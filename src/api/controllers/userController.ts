import { Request, Response } from 'express';
import CreateUserService from '../services/users/createUserService';

class UserController {
  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const { name, cpf, birth, cep, email, password, qualified } = req.body;

      const createUser = new CreateUserService();
      const user = await createUser.execute({
        name,
        cpf,
        birth,
        cep,
        email,
        password,
        qualified,
      });
      return res.status(201).json(user);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default UserController;
