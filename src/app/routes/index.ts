import express from "express";
import { BookRoute } from "../modules/Book/book.route";
import { MemberRoute } from "../modules/Member/member.route";
import { BorrowRecordRoute } from "../modules/BorrowRecord/borrowRecord.route";

const router = express.Router();

const allRoutes = [
  {
    path: "/books",
    route: BookRoute,
  },
  {
    path: "/members",
    route: MemberRoute,
  },
  {
    path: "/",
    route: BorrowRecordRoute,
  },
];

allRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
