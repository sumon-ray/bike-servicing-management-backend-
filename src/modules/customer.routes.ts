import express from "express";
import { customerController } from "./customer.controller";
const router = express.Router();

router.post("/customers", customerController.createCustomerIntoDB);
router.get("/customers", customerController.getAllCustomersFromDB);
router.get("/customers/:id", customerController.getCustomerById);
router.put("/customers/:id", customerController.updateCustomerInfoIntoDB);
router.delete("/customers/:id", customerController.deleteCustomerFromDB);

export default router;
