"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bikeRouter = void 0;
const express_1 = __importDefault(require("express"));
const bike_controller_1 = require("./bike.controller");
const router = express_1.default.Router();
router.post("/", bike_controller_1.bikeController.createBike);
router.get("/", bike_controller_1.bikeController.getAllBikesFromDB);
router.get("/:id", bike_controller_1.bikeController.getBikeByIdFromDB);
exports.bikeRouter = router;
