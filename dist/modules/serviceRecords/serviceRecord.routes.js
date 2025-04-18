"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceRecordRoute = void 0;
const express_1 = __importDefault(require("express"));
const serviceRecord_controller_1 = require("./serviceRecord.controller");
const router = express_1.default.Router();
router.post("/", serviceRecord_controller_1.serviceRecordController.createServiceRecordIntoDB);
router.get("/", serviceRecord_controller_1.serviceRecordController.getAllServiceRecordFromDB);
router.get("/:id", serviceRecord_controller_1.serviceRecordController.getServiceRecordByIdFromDB);
router.patch("/:id", serviceRecord_controller_1.serviceRecordController.updateServiceRecordIntoDB);
exports.serviceRecordRoute = router;
