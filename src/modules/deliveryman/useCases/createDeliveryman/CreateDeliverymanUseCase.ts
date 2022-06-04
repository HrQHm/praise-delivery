import { Deliveryman } from "@prisma/client";
import { hash } from "bcrypt";
import { prisma } from "../../../../database/PrismaClient";

interface IRequest {
  username: string;
  password: string;
}

class CreateDeliverymanUseCase {
  async execute({ username, password }: IRequest): Promise<Deliveryman> {
    const deliverymanExist = await prisma.deliveryman.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive"
        }
      }
    });

    if (deliverymanExist) {
      throw new Error("Deliveryman already exist");
    }

    const hashPassword = await hash(password, 8);

    const deliveryman = await prisma.deliveryman.create({
      data: {
        username,
        password: hashPassword
      }
    });

    return deliveryman;
  };
}

export { CreateDeliverymanUseCase };