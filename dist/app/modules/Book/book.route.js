"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoute = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const route = express_1.default.Router();
route.post("/", book_controller_1.BookController.createBookIntoDB);
route.get("/", book_controller_1.BookController.getBooksFromDB);
route.get("/:id", book_controller_1.BookController.getBookByIDFromDB);
route.put("/:id", book_controller_1.BookController.updateBookIntoDB);
route.delete("/:id", book_controller_1.BookController.deleteBookFromDB);
exports.BookRoute = route;
