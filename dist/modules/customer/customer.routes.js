"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerRouter = void 0;
const express_1 = __importDefault(require("express"));
const customer_controller_1 = require("./customer.controller");
const router = express_1.default.Router();
router.post("/", customer_controller_1.customerController.createCustomerIntoDB);
router.get("/", customer_controller_1.customerController.getAllCustomersFromDB);
router.get("/:id", customer_controller_1.customerController.getCustomerById);
router.put("/:id", customer_controller_1.customerController.updateCustomerInfoIntoDB);
router.delete("/:id", customer_controller_1.customerController.deleteCustomerFromDB);
exports.customerRouter = router;
