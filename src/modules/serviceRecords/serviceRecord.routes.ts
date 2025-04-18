import express from "express";
import { serviceRecordController } from "./serviceRecord.controller";
const router = express.Router();

router.post("/", serviceRecordController.createServiceRecordIntoDB);
export const serviceRecordRoute = router;
