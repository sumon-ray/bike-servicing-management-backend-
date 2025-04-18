import { Prisma } from "@prisma/client";
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

// get all services

const getAllServiceRecordFromDB = async () => {
  const result = await prisma.serviceRecord.findMany();
  return result;
};

// get services by id

const getServiceRecordByIdFromDB = async (id: string) => {
  try {
    const result = await prisma.serviceRecord.findUniqueOrThrow({
      where: {
        serviceId: id,
      },
    });
    return result;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        throw new AppError("No service found with the provided ID", 404);
      }
    }
    throw new AppError("Internal server error", 500);
  }
};

// update service record
const updateServiceRecordIntoDB = async (data:any, id: string) => {
  await prisma.serviceRecord.findUniqueOrThrow({
    where: {
      serviceId: id,
    },
  });
  const result = await prisma.serviceRecord.update({
    where: {
      serviceId: id,
    },
    data: data,
  });
  return result;
};


export const serviceRecordService = {
  createServiceRecordIntoDB,
  getAllServiceRecordFromDB,
  getServiceRecordByIdFromDB,
  updateServiceRecordIntoDB
};
