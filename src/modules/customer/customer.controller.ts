import { Request, Response } from "express";
import httpStatus from "http-status";
import { customerService } from "./customer.service";
import sendResponse from "../../shared/sendResponse";

const createCustomerIntoDB = async (req: Request, res: Response) => {
  //   console.log(result);
  try {
    const result = await customerService.createCustomerIntoDB(req.body);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "d",
      data: result,
    });


  } catch (error:any) {

    sendResponse(res, {
      statusCode: 400,
      success: false,
      message: "failed to created customers",
      error: error.name || "Something went wrong"
    })
  }
};

// get all customers
const getAllCustomersFromDB = async (req: Request, res: Response) => {
  try {
    const result = await customerService.getAllCustomersFromDB();

    sendResponse(res,{
      statusCode:200,
      success:true,
      message: "Customers fetched successfully",
      data: result,
    })
  } catch (error: any) {
    // res.status(httpStatus.BAD_REQUEST).json({
    //   success: false,
    //   message: "failed to fetch all customers",
    //   error: error.name || "something went wrong",
    // });
    sendResponse(res, {
      statusCode: 400,
      success: false,
      message: "failed to fetch all customers",
      error: error.name

    })
  }
};

// get customer by id
const getCustomerById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await customerService.getCustomerById(id);

    res.status(httpStatus.OK).json({
      success: true,
      message: "Customers fetched successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "failed to fetch customer",
      error: error.name || "something went wrong",
    });
  }
};

// update customer info into data
const updateCustomerInfoIntoDB = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await customerService.updateCustomerInfoIntoDB(req.body, id);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Customer updated successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "failed to update Customer data",
      error: error.name || "something went wrong",
    });
  }
};

// delete Customer from db
const deleteCustomerFromDB = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await customerService.deleteCustomerFromDB(id);

    res.status(httpStatus.OK).json({
      success: true,
      message: "Customer deleted successfully",
    });
  } catch (error: any) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "failed to delete Customer",
      error: error.name || "something went wrong",
    });
  }
};

export const customerController = {
  createCustomerIntoDB,
  getAllCustomersFromDB,
  getCustomerById,
  updateCustomerInfoIntoDB,
  deleteCustomerFromDB,
};


