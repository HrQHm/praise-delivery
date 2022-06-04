import { compare } from "bcrypt";
import { prisma } from "../../../../database/PrismaClient";
import { Clients } from "@prisma/client";
import { sign } from "jsonwebtoken";
import auth from "../../../../config/auth";

interface IRequest {
  username: string;
  password: string;
}

class AuthenticateClientUseCase {
  async execute({ username, password }: IRequest): Promise<string> {
    const { secret_token_client, expires_in_token } = auth;
    const user = await prisma.clients.findFirst({
      where: {
        username: {
          mode: "insensitive"
        }
      }
    });

    if (!user) {
      throw new Error("Username or Password incorrect");
    }

    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new Error("Username or Password incorrect");
    }


    const token = sign({ username }, secret_token_client, {
      subject: user.id,
      expiresIn: expires_in_token
    });

    return token;
  }
}

export { AuthenticateClientUseCase };