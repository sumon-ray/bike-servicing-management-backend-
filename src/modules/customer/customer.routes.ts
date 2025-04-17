import express from "express";
import { customerController } from "./customer.controller";
const router = express.Router();

router.post("/", customerController.createCustomerIntoDB);
router.get("/", customerController.getAllCustomersFromDB);
router.get("/:id", customerController.getCustomerById);
router.put("/:id", customerController.updateCustomerInfoIntoDB);
router.delete("/:id", customerController.deleteCustomerFromDB);

export const customerRouter = router;
