import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import auth from "../../../../config/auth";
import { prisma } from "../../../../database/PrismaClient";

interface IRequest {
  username: string;
  password: string;
};


class AuthenticateDeliverymanUseCase {
  async execute({ username, password }: IRequest): Promise<string> {
    const { secret_token_client, expires_in_token } = auth;
    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username: {
          mode: 'insensitive'
        }
      }
    });

    if (!deliveryman) {
      throw new Error("Username or Password incorrect");
    };

    const passwordMatch = await compare(password, deliveryman.password);

    if (!passwordMatch) {
      throw new Error("Username or Password incorrect");
    };

    const token = sign({ username }, secret_token_client, {
      subject: deliveryman.id,
      expiresIn: expires_in_token
    });

    return token;
  }
}

export { AuthenticateDeliverymanUseCase };