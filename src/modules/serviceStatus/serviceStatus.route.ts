import express from "express";
import { getPendingOrOverdueServicesController } from "./serviceStatus.controller";

const router = express.Router();

router.get("/status", getPendingOrOverdueServicesController);

export const serviceStatusRouter = router;
