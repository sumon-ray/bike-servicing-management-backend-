import { Request, Response } from "express";
import sendResponse from "../../shared/sendResponse";
import { bikeService } from "./bike.service";

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

export const bikeController = {
  createBike,
};
