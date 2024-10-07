import { verify, Secret } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import authConfig from '../utils/auth';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: number;
}

export default function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new Error('JWT Token is missing.');
  }

  const [, token] = authHeader.split(' ');

  try {
    const decodedToken = verify(token, authConfig.jwt.secret as Secret);

    const { sub } = decodedToken as ITokenPayload;

    req.user = {
      id: sub,
    };

    return next();
  } catch (error) {
    throw new Error('Esta faltando o token JWT', error);
  }
}
