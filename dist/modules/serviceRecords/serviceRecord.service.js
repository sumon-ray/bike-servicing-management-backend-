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
exports.serviceRecordService = void 0;
const client_1 = require("@prisma/client");
const AppError_1 = require("../../errors/AppError");
const prisma_1 = __importDefault(require("../../prisma"));
const createServiceRecordIntoDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const bikeId = yield prisma_1.default.bike.findUnique({
        where: {
            bikeId: data.bikeId,
        },
    });
    if (!bikeId) {
        throw new AppError_1.AppError("Bike not found with this ID", 404);
    }
    const result = yield prisma_1.default.serviceRecord.create({
        data: data,
    });
    return result;
});
// get all services
const getAllServiceRecordFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.serviceRecord.findMany();
    return result;
});
// get services by id
const getServiceRecordByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.serviceRecord.findUniqueOrThrow({
            where: {
                serviceId: id,
            },
        });
        return result;
    }
    catch (error) {
        if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            if (error.code === "P2025") {
                throw new AppError_1.AppError("No service found with the provided ID", 404);
            }
        }
        throw new AppError_1.AppError("Internal server error", 500);
    }
});
// update service record
const updateServiceRecordIntoDB = (data, id) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.serviceRecord.findUniqueOrThrow({
        where: {
            serviceId: id,
        },
    });
    const result = yield prisma_1.default.serviceRecord.update({
        where: {
            serviceId: id,
        },
        data: data,
    });
    return result;
});
exports.serviceRecordService = {
    createServiceRecordIntoDB,
    getAllServiceRecordFromDB,
    getServiceRecordByIdFromDB,
    updateServiceRecordIntoDB
};
