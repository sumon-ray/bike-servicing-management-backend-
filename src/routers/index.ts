import express from "express";
import { bikeRouter } from "../modules/bike/bike.routes";
import { customerRouter } from "../modules/customer/customer.routes";
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
];

moduleRoutes.forEach((route) => router.use(route.path, route.router));

export default router;
