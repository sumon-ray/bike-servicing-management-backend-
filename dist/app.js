"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const routers_1 = __importDefault(require("./routers"));
const globalErrorHandler_1 = __importDefault(require("./middleware/globalErrorHandler"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
// parser
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const rootController = (req, res) => {
    res.send({
        Title: "library management system",
        Dev: "Sumon Ray",
        Assignment: "08",
        Platform: "level-2",
    });
};
app.get("/", rootController);
app.use("/api", routers_1.default);
app.use(globalErrorHandler_1.default);
// app.use('/api/v1/')
// not found error
// global error handler
// routes
// app.use(not)
exports.default = app;
// import cors from "cors";
// import express, { Application, Request, Response } from "express";
// import globalErrorHandler from "./app/middleware.ts/globalErrorHandler";
// import notFoundRoute from "./error/notFoundRoute";
// import router from "./routes";
// const app: Application = express();
// app.use(cors());
// // parser
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// // *********************************************
// // app.get("/", (req: Request, res: Response) => {
// //   res.send({
// //     Message: "ph health care server",
// //   });
// // });
// // app.get("/", (req:Request, res:Response)=>{
// //   res.send({
// //     message: "starter pack"
// //   })
// // })
// const rootController = (req: Request, res: Response) => {
//   res.send({
//     message: "hellow express js",
//   });
// };
// app.get("/", rootController);
// // rooot router
// // bad practice // worst when multiple routes will be added
// // app.use("/api/v1/user", userRoutes);
// // app.use("/api/v1/admin", adminRouter);
// app.use("/api/v1", router);
// app.use(globalErrorHandler);
// app.use(notFoundRoute);
// export default app;
