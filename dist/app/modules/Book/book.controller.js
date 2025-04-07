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
exports.BookController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const book_service_1 = require("./book.service");
const sendResponce_1 = __importDefault(require("../../../shared/sendResponce"));
const http_status_1 = __importDefault(require("http-status"));
const createBookIntoDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.BookService.createBook(req.body);
    const formattedResult = {
        bookId: result.bookId,
        title: result.title,
        genre: result.genre,
        publishedYear: result.publishedYear,
        totalCopies: result.totalCopies,
        availableCopies: result.availableCopies,
    };
    (0, sendResponce_1.default)(res, {
        success: true,
        status: http_status_1.default.CREATED,
        message: "Book created successfully",
        data: formattedResult,
    });
}));
const getBooksFromDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.BookService.getBooks();
    const formattedResult = result.map((book) => ({
        bookId: book.bookId,
        title: book.title,
        genre: book.genre,
        publishedYear: book.publishedYear,
        totalCopies: book.totalCopies,
        availableCopies: book.availableCopies,
    }));
    (0, sendResponce_1.default)(res, {
        success: true,
        status: http_status_1.default.OK,
        message: "Books retrieved successfully",
        data: formattedResult,
    });
}));
const getBookByIDFromDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield book_service_1.BookService.getBookByID(id);
    const formattedResult = {
        bookId: result.bookId,
        title: result.title,
        genre: result.genre,
        publishedYear: result.publishedYear,
        totalCopies: result.totalCopies,
        availableCopies: result.availableCopies,
    };
    (0, sendResponce_1.default)(res, {
        success: true,
        status: http_status_1.default.OK,
        message: "Book retrieved successfully",
        data: formattedResult,
    });
}));
const updateBookIntoDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield book_service_1.BookService.updateBook(req.body, id);
    const formattedResult = {
        bookId: result.bookId,
        title: result.title,
        genre: result.genre,
        publishedYear: result.publishedYear,
        totalCopies: result.totalCopies,
        availableCopies: result.availableCopies,
    };
    (0, sendResponce_1.default)(res, {
        success: true,
        status: http_status_1.default.OK,
        message: "Book updated successfully",
        data: formattedResult,
    });
}));
const deleteBookFromDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield book_service_1.BookService.deleteBook(id);
    (0, sendResponce_1.default)(res, {
        success: true,
        status: http_status_1.default.OK,
        message: "Book successfully deleted",
    });
}));
exports.BookController = {
    createBookIntoDB,
    getBooksFromDB,
    getBookByIDFromDB,
    updateBookIntoDB,
    deleteBookFromDB,
};
