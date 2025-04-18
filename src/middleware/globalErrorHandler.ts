import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";

const globalErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500;
  let message = "Something went wrong";
  if (error instanceof AppError) {
    statusCode = error.statusCode;
    message = error.message;
  }
  if (error instanceof Error) {
    message = error.message;
  }
  res.status(statusCode).json({
    success: false,
    message,
    error: {
      name: error.name,
      stack: process.env.NODE_ENV === "production" ? undefined : error.stack,
    },
  });
};

export default globalErrorHandler;
