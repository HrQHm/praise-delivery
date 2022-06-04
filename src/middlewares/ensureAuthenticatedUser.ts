import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { prisma } from '../database/PrismaClient';

interface IPayload {
  sub: string;
}
export async function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: 'Token is missing'
    });
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(token, "dc5c47bf9bc0f06f16384c3c7906c1a5") as IPayload;

    const client = await prisma.clients.findFirst({
      where: {
        id: sub
      }
    });

    if (!client) {
      return res.status(400).json({
        message: 'Client does not exist'
      });
    }

    req.id_client = sub;
    return next();
  } catch {
    return res.status(401).json({
      message: 'Invalid token'
    });
  }
}