import { Response } from "express";

type ISendResponse<T> = {
  statusCode: number;
  success: boolean;
  message: string;
  data?: T;
  error?: any
};
const sendResponse = <T>(res: Response, data: ISendResponse<T>) => {
  res.status(data.statusCode).json({
    success: data.success,
    message: data.message,
    data: data.data,
    error: data.error
  });
};

export default sendResponse;






