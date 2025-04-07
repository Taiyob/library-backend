import express from "express";
import { BorrowRecordController } from "./borrowRecord.controller";

const route = express.Router();

route.post("/borrow", BorrowRecordController.borrowBookIntoDB);
route.post("/return", BorrowRecordController.returnBookIntoDB);

export const BorrowRecordRoute = route;
