import { Prisma } from "@prisma/client";
import { AppError } from "../../errors/AppError";
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

// get all bikes
const getAllBikesFromDB = async () => {
  const result = await prisma.bike.findMany();
  return result;
};

// get a bike by id
const getBikeById = async (id: string) => {
  try {
    const result = await prisma.bike.findUniqueOrThrow({
      where: {
        bikeId: id,
      },
    });
    return result;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        throw new AppError("No bike found with the provided ID", 404);
      }
    }
    throw new AppError("Internal server error", 500);
  }
};
export const bikeService = {
  createBike,
  getAllBikesFromDB,
  getBikeById,
};
