import { Request, Response } from 'express';
import CreateUserService from '../services/users/createUserService';
import ShowUserService from '../services/users/showUserService';
import UpdateUserService from '../services/users/updateUserService';

class UserController {
  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const { name, cpf, birth, cep, email, password, qualified, userAddress } =
        req.body;

      const createUser = new CreateUserService();
      const user = await createUser.execute({
        name,
        cpf,
        birth,
        cep,
        email,
        password,
        qualified,
        ...userAddress,
      });
      return res.status(201).json(user);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  public async show(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      if (!/^\d+$/.test(id)) {
        return res.status(400).json({ error: 'Id diferente do padrao' });
      }

      if (!id) {
        return res.status(404).json({ error: 'Usuario não encontrado' });
      }

      const showCar = new ShowUserService();

      const car = await showCar.execute(Number(id));

      return res.status(200).json(car);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    try {
      const { name, cpf, birth, cep, email, password, qualified } = req.body;
      const { id } = req.params;

      if (!/^\d+$/.test(id)) {
        return res.status(400).json({ error: 'Id diferente do padrao' });
      }

      if (!id) {
        return res.status(404).json({ error: 'Carro não encontrado' });
      }

      const updateCar = new UpdateUserService();
      const userId = Number(id);
      const user = await updateCar.execute({
        id: userId,
        name,
        cpf,
        birth,
        cep,
        email,
        password,
        qualified,
      });

      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default UserController;
