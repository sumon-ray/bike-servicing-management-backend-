import express from "express";
import { serviceRecordController } from "./serviceRecord.controller";
const router = express.Router();

router.post("/", serviceRecordController.createServiceRecordIntoDB);
router.get("/", serviceRecordController.getAllServiceRecordFromDB);
router.get("/:id", serviceRecordController.getServiceRecordByIdFromDB);
router.patch("/:id", serviceRecordController.updateServiceRecordIntoDB);
export const serviceRecordRoute = router;
