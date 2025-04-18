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
exports.customerService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const createCustomerIntoDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    //   console.log(data);
    // create customer into db
    const result = yield prisma_1.default.customer.create({
        data: data,
    });
    return result;
});
// get all customers from db
const getAllCustomersFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.customer.findMany();
    return result;
});
// get a customer by id
const getCustomerById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.customer.findUniqueOrThrow({
        where: {
            customerId: id,
        },
    });
    return result;
});
// update customer info into db
const updateCustomerInfoIntoDB = (data, id) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.customer.findUniqueOrThrow({
        where: {
            customerId: id,
        },
    });
    const result = yield prisma_1.default.customer.update({
        where: {
            customerId: id,
        },
        data: data,
    });
    return result;
});
// delete custome from db
const deleteCustomerFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.customer.findUniqueOrThrow({
        where: {
            customerId: id,
        },
    });
    const result = yield prisma_1.default.customer.delete({
        where: {
            customerId: id,
        },
    });
    return result;
});
exports.customerService = {
    createCustomerIntoDB,
    getAllCustomersFromDB,
    getCustomerById,
    updateCustomerInfoIntoDB,
    deleteCustomerFromDB,
};
