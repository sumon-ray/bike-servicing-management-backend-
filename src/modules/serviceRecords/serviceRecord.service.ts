import { AppError } from "../../errors/AppError";
import prisma from "../../prisma";

const createServiceRecordIntoDB = async (data: any) => {
  const bikeId = await prisma.bike.findUnique({
    where: {
      bikeId: data.bikeId,
    },
  });

  if (!bikeId) {
    throw new AppError("Bike not found with this ID", 404);
  }
  const result = await prisma.serviceRecord.create({
    data: data,
  });
  return result;
};

export const serviceRecordService = {
  createServiceRecordIntoDB,
};
