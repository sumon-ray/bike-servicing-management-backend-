import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { serviceRecordService } from "./serviceRecord.service";

const createServiceRecordIntoDB = catchAsync(
  async (req: Request, res: Response) => {
    const result = await serviceRecordService.createServiceRecordIntoDB(
      req.body
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Service record created successfully",
      data: result,
    });
  }
);

// get all service records
const getAllServiceRecordFromDB = catchAsync(
  async (req: Request, res: Response) => {
    const result = await serviceRecordService.getAllServiceRecordFromDB();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Service records fetched successfully",
      data: result,
    });
  }
);
// get service record by id
const getServiceRecordByIdFromDB = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await serviceRecordService.getServiceRecordByIdFromDB(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Service record fetched successfully",
      data: result,
    });
  }
);

// update service record
const updateServiceRecordIntoDB = catchAsync(async(req:Request, res:Response)=>{
  const {id}= req.params
  const data = req.body
  const result = await serviceRecordService.updateServiceRecordIntoDB(data, id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service marked as completed",
    data: result,
  })
})

export const serviceRecordController = {
  createServiceRecordIntoDB,
  getAllServiceRecordFromDB,
  getServiceRecordByIdFromDB,
  updateServiceRecordIntoDB 
};
