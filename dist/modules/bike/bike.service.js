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
exports.bikeService = void 0;
const client_1 = require("@prisma/client");
const AppError_1 = require("../../errors/AppError");
const prisma_1 = __importDefault(require("../../prisma"));
const createBike = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(data);
        const result = yield prisma_1.default.bike.create({
            data: data,
        });
        return result;
    }
    catch (error) {
        if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            if (error.code === "P2003") {
                // Foreign key constraint failed
                throw new Error("Customer not found with the given ID!");
            }
        }
        throw error;
    }
});
// get all bikes
const getAllBikesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.bike.findMany();
    return result;
});
// get a bike by id
const getBikeById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.bike.findUniqueOrThrow({
            where: {
                bikeId: id,
            },
        });
        return result;
    }
    catch (error) {
        if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            if (error.code === "P2025") {
                throw new AppError_1.AppError("No bike found with the provided ID", 404);
            }
        }
        throw new AppError_1.AppError("Internal server error", 500);
    }
});
exports.bikeService = {
    createBike,
    getAllBikesFromDB,
    getBikeById,
};
