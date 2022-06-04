import { Request, Response } from 'express';
import { FindAllDeliveriesOpeningUseCase } from './FindAllDeliveriesOpeningUseCase';

class FindAllDeliveriesOpeningController {
  async handle(req: Request, res: Response): Promise<Response> {
    const findAllDeliveriesOpeningUseCase = new FindAllDeliveriesOpeningUseCase;
    const deliveries = await findAllDeliveriesOpeningUseCase.execute();

    return res.json(deliveries);
  }
};

export { FindAllDeliveriesOpeningController };