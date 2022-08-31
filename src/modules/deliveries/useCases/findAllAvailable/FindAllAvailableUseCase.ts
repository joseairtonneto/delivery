import { prisma } from "../../../../database/prismaClient";

export class FindAllAvailableUseCase {
  async execute() {
    const deliveries = await prisma.deliveries.findMany({
      where: {
        deliveryman_id: null,
        end_at: null,
      },
    });

    return deliveries;
  }
}
