import { Request, Response } from "express";
import { FindAllDeliveriesClientUseCase } from "./FindAllDeliveriesClientUseCase";

export class FindAllDeliveriesClientController {
  async handle(request: Request, response: Response) {
    const { client_id } = request;
    const findAllDeliveriesClientUseCase = new FindAllDeliveriesClientUseCase();

    const deliveries = await findAllDeliveriesClientUseCase.execute(client_id);

    return response.json(deliveries);
  }
}
