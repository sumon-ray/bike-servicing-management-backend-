"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bike_routes_1 = require("../modules/bike/bike.routes");
const customer_routes_1 = require("../modules/customer/customer.routes");
const serviceRecord_routes_1 = require("../modules/serviceRecords/serviceRecord.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/customers",
        router: customer_routes_1.customerRouter,
    },
    {
        path: "/bikes",
        router: bike_routes_1.bikeRouter,
    },
    {
        path: "/services",
        router: serviceRecord_routes_1.serviceRecordRoute,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.router));
exports.default = router;
