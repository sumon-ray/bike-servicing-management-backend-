import { NextFunction, Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { bikeService } from "./bike.service";

// create bike
const createBike = async (req: Request, res: Response) => {
  try {
    const result = await bikeService.createBike(req.body);

    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "Bike added successfully",
      data: result,
    });
  } catch (error: any) {
    if (error.message === "Customer not found with the given ID!") {
      sendResponse(res, {
        statusCode: 500,
        success: false,
        message: error.message,
        error: "InvalidForeignKey",
      });
      return;
    }
  }
};

// get all bikes
const getAllBikesFromDB = async (req: Request, res: Response) => {
  try {
    const result = await bikeService.getAllBikesFromDB();

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Bike fetched successfully",
      data: result,
    });
  } catch (error: any) {
    sendResponse(res, {
      statusCode: 500,
      success: false,
      message: "Failed to fetch bikes",
      error: error.name || "something is wrong",
    });
  }
};

// get a bike based on id
const getBikeByIdFromDB = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const result = await bikeService.getBikeById(id);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Bike fetched successfully",
      data: result,
    });
  }
);

export const bikeController = {
  createBike,
  getAllBikesFromDB,
  getBikeByIdFromDB,
};
