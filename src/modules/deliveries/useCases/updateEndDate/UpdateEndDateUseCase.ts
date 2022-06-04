import { Deliveries } from "@prisma/client";
import { prisma } from "../../../../database/PrismaClient";

interface IRequest {
  id_delivery: string;
  id_deliveryman: string;
}

class UpdateEndDateUseCase {
  async execute({ id_delivery, id_deliveryman }: IRequest) {
    const delivery = await prisma.deliveries.update({
      where: {
        link_delivery_deliveryman: {
          id: id_delivery,
          id_deliveryman
        }
      },
      data: {
        end_at: new Date(),
      }
    });

    return delivery;
  }
}

export { UpdateEndDateUseCase }