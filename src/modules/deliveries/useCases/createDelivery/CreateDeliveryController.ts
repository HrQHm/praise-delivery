import { Request, Response } from 'express';
import { CreateDeliveryUseCase } from './CreateDeliveryUseCase';

class CreateDeliveryController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { item_name } = req.body;
    const { id_client } = req;

    const createDeliveryUseCase = new CreateDeliveryUseCase();
    const delivery = await createDeliveryUseCase.execute({
      item_name,
      id_client
    });


    return res.status(200).json(delivery);
  }

};

export { CreateDeliveryController };