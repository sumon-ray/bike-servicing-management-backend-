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

export const serviceRecordController = {
  createServiceRecordIntoDB,
};
