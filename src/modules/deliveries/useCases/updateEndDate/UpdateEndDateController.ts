import { Request, Response } from "express";
import { UpdateEndDateUseCase } from "./UpdateEndDateUseCase";

export class UpdateEndDateController {
  async handle(request: Request, response: Response) {
    const { deliveryman_id } = request;
    const { id: delivery_id } = request.params;
    const updateEndDateUseCase = new UpdateEndDateUseCase();

    const delivery = await updateEndDateUseCase.execute({
      delivery_id,
      deliveryman_id,
    });

    return response.json(delivery);
  }
}
