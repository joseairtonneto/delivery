import { Request, Response } from "express";
import { UpdateDeliverymanUseCase } from "./UpdateDeliverymanUsecase";

export class UpdateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { deliveryman_id } = request;
    const { id: delivery_id } = request.params;
    const updateDeliverymanUseCase = new UpdateDeliverymanUseCase();

    const delivery = await updateDeliverymanUseCase.execute({
      delivery_id,
      deliveryman_id,
    });

    return response.json(delivery);
  }
}
