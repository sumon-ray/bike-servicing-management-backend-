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
exports.customerController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const customer_service_1 = require("./customer.service");
const sendResponse_1 = __importDefault(require("../../shared/sendResponse"));
const createCustomerIntoDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //   console.log(result);
    try {
        const result = yield customer_service_1.customerService.createCustomerIntoDB(req.body);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            success: true,
            message: "Customer created successfully",
            data: result,
        });
    }
    catch (error) {
        (0, sendResponse_1.default)(res, {
            statusCode: 400,
            success: false,
            message: "failed to created customers",
            error: error.name || "Something went wrong"
        });
    }
});
// get all customers
const getAllCustomersFromDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield customer_service_1.customerService.getAllCustomersFromDB();
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            success: true,
            message: "Customers fetched successfully",
            data: result,
        });
    }
    catch (error) {
        // res.status(httpStatus.BAD_REQUEST).json({
        //   success: false,
        //   message: "failed to fetch all customers",
        //   error: error.name || "something went wrong",
        // });
        console.log(error);
        (0, sendResponse_1.default)(res, {
            statusCode: 400,
            success: false,
            message: "failed to fetch all customers",
            error: error.name
        });
    }
});
// get customer by id
const getCustomerById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield customer_service_1.customerService.getCustomerById(id);
        res.status(http_status_1.default.OK).json({
            success: true,
            message: "Customers fetched successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(http_status_1.default.BAD_REQUEST).json({
            success: false,
            message: "failed to fetch customer",
            error: error.name || "something went wrong",
        });
    }
});
// update customer info into data
const updateCustomerInfoIntoDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield customer_service_1.customerService.updateCustomerInfoIntoDB(req.body, id);
        res.status(http_status_1.default.OK).json({
            success: true,
            message: "Customer updated successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(http_status_1.default.BAD_REQUEST).json({
            success: false,
            message: "failed to update Customer data",
            error: error.name || "something went wrong",
        });
    }
});
// delete Customer from db
const deleteCustomerFromDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield customer_service_1.customerService.deleteCustomerFromDB(id);
        res.status(http_status_1.default.OK).json({
            success: true,
            message: "Customer deleted successfully",
        });
    }
    catch (error) {
        res.status(http_status_1.default.BAD_REQUEST).json({
            success: false,
            message: "failed to delete Customer",
            error: error.name || "something went wrong",
        });
    }
});
exports.customerController = {
    createCustomerIntoDB,
    getAllCustomersFromDB,
    getCustomerById,
    updateCustomerInfoIntoDB,
    deleteCustomerFromDB,
};
