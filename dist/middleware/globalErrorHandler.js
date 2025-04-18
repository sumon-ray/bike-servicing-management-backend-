"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = require("../errors/AppError");
const globalErrorHandler = (error, req, res, next) => {
    let statusCode = 500;
    let message = "Something went wrong";
    if (error instanceof AppError_1.AppError) {
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
exports.default = globalErrorHandler;
