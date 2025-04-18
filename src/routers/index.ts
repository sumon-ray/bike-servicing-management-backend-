import express from "express";
import { bikeRouter } from "../modules/bike/bike.routes";
import { customerRouter } from "../modules/customer/customer.routes";
import { serviceRecordRoute } from "../modules/serviceRecords/serviceRecord.routes";
import { serviceStatusRouter } from "../modules/serviceStatus/serviceStatus.route";
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
  {
    path: "/services",
    router: serviceStatusRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.router));

export default router;
