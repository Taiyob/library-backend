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
exports.BorrowRecordService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const borrowBook = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.borrowRecord.create({
        data: {
            bookId: payload.bookId,
            memberId: payload.memberId,
        },
    });
    return result;
});
const returnBook = (borrowId) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.borrowRecord.findUniqueOrThrow({
        where: {
            borrowId: borrowId,
        },
    });
    const result = yield prisma_1.default.borrowRecord.update({
        where: {
            borrowId: borrowId,
        },
        data: {
            returnDate: new Date(),
        },
    });
    return result;
});
exports.BorrowRecordService = { borrowBook, returnBook };
