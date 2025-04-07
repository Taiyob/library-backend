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
exports.BorrowRecordController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const borrowRecord_service_1 = require("./borrowRecord.service");
const sendResponce_1 = __importDefault(require("../../../shared/sendResponce"));
const http_status_1 = __importDefault(require("http-status"));
const borrowBookIntoDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield borrowRecord_service_1.BorrowRecordService.borrowBook(req.body);
    const formattedResult = {
        borrowId: result.borrowId,
        bookId: result.bookId,
        memberId: result.memberId,
        borrowDate: result.borrowDate,
    };
    (0, sendResponce_1.default)(res, {
        success: true,
        status: http_status_1.default.OK,
        message: "Book borrowed successfully",
        data: formattedResult,
    });
}));
const returnBookIntoDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { borrowId } = req.body;
    yield borrowRecord_service_1.BorrowRecordService.returnBook(borrowId);
    (0, sendResponce_1.default)(res, {
        success: true,
        status: http_status_1.default.OK,
        message: "Book returned successfully",
    });
}));
exports.BorrowRecordController = { borrowBookIntoDB, returnBookIntoDB };
