"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_route_1 = require("../modules/Book/book.route");
const member_route_1 = require("../modules/Member/member.route");
const borrowRecord_route_1 = require("../modules/BorrowRecord/borrowRecord.route");
const router = express_1.default.Router();
const allRoutes = [
    {
        path: "/books",
        route: book_route_1.BookRoute,
    },
    {
        path: "/members",
        route: member_route_1.MemberRoute,
    },
    {
        path: "/",
        route: borrowRecord_route_1.BorrowRecordRoute,
    },
];
allRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
