import cors from "cors";
import express, { Application, Request, Response } from "express";
const app: Application = express();
app.use(cors());
// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const rootController = (req: Request, res: Response) => {
  res.send({
    message: "library management system",
  });
};

app.get("/", rootController);

app.use('/api')
// app.use('/api/v1/')
// not found error 
// global error handler
// routes 
// app.use(not)

export default app;

















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
