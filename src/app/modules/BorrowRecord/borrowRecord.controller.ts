import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { BorrowRecordService } from "./borrowRecord.service";
import sendResponse from "../../../shared/sendResponce";
import http from "http-status";

const borrowBookIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await BorrowRecordService.borrowBook(req.body);

  const formattedResult = {
    borrowId: result.borrowId,
    bookId: result.bookId,
    memberId: result.memberId,
    borrowDate: result.borrowDate,
  };

  sendResponse(res, {
    success: true,
    status: http.OK,
    message: "Book borrowed successfully",
    data: formattedResult,
  });
});

const returnBookIntoDB = catchAsync(async (req: Request, res: Response) => {
  const { borrowId } = req.body;
  await BorrowRecordService.returnBook(borrowId);

  sendResponse(res, {
    success: true,
    status: http.OK,
    message: "Book returned successfully",
  });
});

export const BorrowRecordController = { borrowBookIntoDB, returnBookIntoDB };
