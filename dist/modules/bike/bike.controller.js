"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bikeController = void 0;
const catchAsync_1 = __importDefault(require("../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../shared/sendResponse"));
const bike_service_1 = require("./bike.service");
// create bike
const createBike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield bike_service_1.bikeService.createBike(req.body);
        (0, sendResponse_1.default)(res, {
            success: true,
            statusCode: 200,
            message: "Bike added successfully",
            data: result,
        });
    }
    catch (error) {
        if (error.message === "Customer not found with the given ID!") {
            (0, sendResponse_1.default)(res, {
                statusCode: 500,
                success: false,
                message: error.message,
                error: "InvalidForeignKey",
            });
            return;
        }
    }
});
// get all bikes
const getAllBikesFromDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield bike_service_1.bikeService.getAllBikesFromDB();
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            success: true,
            message: "Bike fetched successfully",
            data: result,
        });
    }
    catch (error) {
        (0, sendResponse_1.default)(res, {
            statusCode: 500,
            success: false,
            message: "Failed to fetch bikes",
            error: error.name || "something is wrong",
        });
    }
});
// get a bike based on id
const getBikeByIdFromDB = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield bike_service_1.bikeService.getBikeById(id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Bike fetched successfully",
        data: result,
    });
}));
exports.bikeController = {
    createBike,
    getAllBikesFromDB,
    getBikeByIdFromDB,
};
