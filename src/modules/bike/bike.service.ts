import { Prisma } from "@prisma/client";
import prisma from "../../prisma";

type IBike = {
  brand: string;
  model: string;
  year: number;
  customerId: string;
};
const createBike = async (data: IBike) => {
  try {
    console.log(data);
    const result = await prisma.bike.create({
      data: data,
    });
    return result;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2003") {
          // Foreign key constraint failed
          throw new Error("Customer not found with the given ID!");
        }
      }
    throw error;
  }
};

export const bikeService = {
  createBike,
};
