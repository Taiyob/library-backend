"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowRecordRoute = void 0;
const express_1 = __importDefault(require("express"));
const borrowRecord_controller_1 = require("./borrowRecord.controller");
const route = express_1.default.Router();
route.post("/borrow", borrowRecord_controller_1.BorrowRecordController.borrowBookIntoDB);
route.post("/return", borrowRecord_controller_1.BorrowRecordController.returnBookIntoDB);
exports.BorrowRecordRoute = route;
