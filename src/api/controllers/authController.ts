import { Request, Response } from 'express';
import AuthService from '../services/users/authService';

class AuthController {
  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const { email, password } = req.body;

      const createAuth = new AuthService();

      const accessToken = await createAuth.execute({
        email,
        password,
      });

      res.status(200).json({ accessToken });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}
export default AuthController;
