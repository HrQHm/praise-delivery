import { Request, Response } from 'express';
import { FindAllDeliveriesDeliverymanUseCase } from './FindAllDeliveriesDeliverymanUseCase';

class FindAllDeliveriesDeliverymanController {
  async handle(req: Request, res: Response) {
    const { id_deliveryman } = req;
    const findAllDeliveriesDeliverymanUseCase = new FindAllDeliveriesDeliverymanUseCase();
    const deliveries = await findAllDeliveriesDeliverymanUseCase.execute(id_deliveryman);

    return res.json(deliveries);
  }
}

export { FindAllDeliveriesDeliverymanController };