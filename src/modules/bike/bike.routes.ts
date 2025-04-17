import express from "express";
import { bikeController } from "./bike.controller";
const router = express.Router();

router.post("/", bikeController.createBike);
router.get("/", bikeController.getAllBikesFromDB);
router.get("/:id", bikeController.getBikeByIdFromDB);

export const bikeRouter = router;
