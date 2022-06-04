import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { prisma } from '../database/PrismaClient';

interface IPayload {
  sub: string;
}
export async function ensureAuthenticatedDeliveryman(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: 'Token is missing'
    });
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(token, "88b82cb281485351c784945233f4113e") as IPayload;

    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        id: sub
      }
    });

    if (!deliveryman) {
      return res.status(400).json({
        message: 'Deliveryman does not exist'
      });
    }

    req.id_deliveryman = sub;
    return next();
  } catch {
    return res.status(401).json({
      message: 'Invalid token'
    });
  }
}