import { Deliveries } from "@prisma/client";
import { prisma } from "../../../../database/PrismaClient";

interface IRequest {
  id_delivery: string;
  id_deliveryman: string;
}

class UpdateDeliverymanUseCase {
  async execute({ id_delivery, id_deliveryman }: IRequest): Promise<Deliveries> {

    const delivery = await prisma.deliveries.update({
      where: {
        id: id_delivery
      },
      data: {
        id_deliveryman
      }
    });

    if (!delivery) {
      throw new Error("Delivery not found");
    };

    return delivery;
  }
}

export { UpdateDeliverymanUseCase };