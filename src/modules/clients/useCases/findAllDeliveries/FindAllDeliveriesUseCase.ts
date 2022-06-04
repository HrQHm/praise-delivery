import { Deliveries } from "@prisma/client";
import { prisma } from "../../../../database/PrismaClient";


class FindAllDeliveriesUseCase {
  async execute(id_client: string) {
    const deliveries = await prisma.clients.findMany({
      where: {
        id: id_client
      },
      select: {
        id: true,
        username: true,
        deliveries: true
      }
    });

    if (deliveries.length <= 0) {
      throw new Error("Client does not have any delivery");
    };

    return deliveries;
  }
}

export { FindAllDeliveriesUseCase }