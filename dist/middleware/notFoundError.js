"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const notFoundError = (req, res, next) => {
    res.status(http_status_1.default.NOT_FOUND).json({
        success: false,
        message: "API NOT FOUND",
        error: {
            path: req.originalUrl,
            message: "Your requested path is not found"
        }
    });
};
exports.default = notFoundError;
// import { NextFunction, Request, Response } from "express";
// import httpStatus from "http-status";
// const notFoundRoute = (req: Request, res: Response, next: NextFunction) => {
//   console.log(req);
//   res.status(httpStatus.NOT_FOUND).json({
//     success: false,
//     message: "API NOT FOUND",
//     error: {
//       path: req.originalUrl,
//       message: "your requested path is not found",
//     },
//   });
// };
// export default notFoundRoute;
