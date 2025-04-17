import express from "express";
import { customerController } from "./customer.controller";
const router = express.Router();

router.post("/customers", customerController.createCustomerIntoDB);
router.get("/customers", customerController.getAllCustomersFromDB);

export default router;
