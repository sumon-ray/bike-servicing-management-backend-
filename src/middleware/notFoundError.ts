import { NextFunction, Request, Response } from "express";
import  httpStatus  from "http-status";
const notFoundError = (req:Request,res:Response, next:NextFunction)=>{
res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "API NOT FOUND",
    error: {
        path: req.originalUrl,
        message: "Your requested path is not found"
    }
})
}

export default notFoundError





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
