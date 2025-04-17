import { Request, Response } from "express";
import httpStatus from "http-status";
import { customerService } from "./customer.service";

const createCustomerIntoDB = async (req: Request, res: Response) => {
  //   console.log(result);
  try {
    const result = await customerService.createCustomerIntoDB(req.body);

    res.status(httpStatus.OK).json({
      success: true,
      message: "Customers created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "failed to created customers",
      error: error.name || "something went wrong",
    });
  }
};

// get all customers
const getAllCustomersFromDB = async (req: Request, res: Response) => {
  try {
    const result = await customerService.getAllCustomersFromDB();
    res.status(httpStatus.OK).json({
      success: true,
      message: "Customers fetched successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "failed to fetch all customers",
      error: error.name || "something went wrong",
    });
  }
};

export const customerController = {
  createCustomerIntoDB,
  getAllCustomersFromDB,
};
