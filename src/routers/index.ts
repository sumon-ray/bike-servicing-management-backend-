import express from "express";
import { bikeRouter } from "../modules/bike/bike.routes";
import { customerRouter } from "../modules/customer/customer.routes";
import { serviceRecordRoute } from "../modules/serviceRecords/serviceRecord.routes";
const router = express.Router();

const moduleRoutes = [
  {
    path: "/customers",
    router: customerRouter,
  },
  {
    path: "/bikes",
    router: bikeRouter,
  },
  {
    path: "/services",
    router: serviceRecordRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.router));

export default router;
