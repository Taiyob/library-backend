import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { BookService } from "./book.service";
import sendResponse from "../../../shared/sendResponce";
import http from "http-status";

const createBookIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.createBook(req.body);

  const formattedResult = {
    bookId: result.bookId,
    title: result.title,
    genre: result.genre,
    publishedYear: result.publishedYear,
    totalCopies: result.totalCopies,
    availableCopies: result.availableCopies,
  };

  sendResponse(res, {
    success: true,
    status: http.CREATED,
    message: "Book created successfully",
    data: formattedResult,
  });
});

const getBooksFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.getBooks();

  const formattedResult = result.map((book) => ({
    bookId: book.bookId,
    title: book.title,
    genre: book.genre,
    publishedYear: book.publishedYear,
    totalCopies: book.totalCopies,
    availableCopies: book.availableCopies,
  }));

  sendResponse(res, {
    success: true,
    status: http.OK,
    message: "Books retrieved successfully",
    data: formattedResult,
  });
});

const getBookByIDFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await BookService.getBookByID(id);

  const formattedResult = {
    bookId: result.bookId,
    title: result.title,
    genre: result.genre,
    publishedYear: result.publishedYear,
    totalCopies: result.totalCopies,
    availableCopies: result.availableCopies,
  };

  sendResponse(res, {
    success: true,
    status: http.OK,
    message: "Book retrieved successfully",
    data: formattedResult,
  });
});

const updateBookIntoDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await BookService.updateBook(req.body, id);

  const formattedResult = {
    bookId: result.bookId,
    title: result.title,
    genre: result.genre,
    publishedYear: result.publishedYear,
    totalCopies: result.totalCopies,
    availableCopies: result.availableCopies,
  };

  sendResponse(res, {
    success: true,
    status: http.OK,
    message: "Book updated successfully",
    data: formattedResult,
  });
});

const deleteBookFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  await BookService.deleteBook(id);

  sendResponse(res, {
    success: true,
    status: http.OK,
    message: "Book successfully deleted",
  });
});

export const BookController = {
  createBookIntoDB,
  getBooksFromDB,
  getBookByIDFromDB,
  updateBookIntoDB,
  deleteBookFromDB,
};
