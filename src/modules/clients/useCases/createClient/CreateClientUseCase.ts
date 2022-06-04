import { Clients } from '@prisma/client';
import { hash } from 'bcrypt';
import { prisma } from "../../../../database/PrismaClient";

interface IRequest {
  username: string;
  password: string;
}

class CreateClientUseCase {
  async execute({ username, password }: IRequest): Promise<Clients> {
    const clientExist = await prisma.clients.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive"
        }
      }
    });

    if (clientExist) {
      throw new Error("Client already exist");
    }

    const passwordHash = await hash(password, 8);
    const client = await prisma.clients.create({
      data: {
        username,
        password: passwordHash
      }
    })

    return client;
  };
}

export { CreateClientUseCase };