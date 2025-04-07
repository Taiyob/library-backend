import prisma from "../../../shared/prisma";
import { IBook } from "./bookInterface";

const createBook = async (data: IBook) => {
  const result = await prisma.book.create({
    data: data,
  });

  return result;
};

const getBooks = async () => {
  const result = await prisma.book.findMany({});

  return result;
};

const getBookByID = async (id: string) => {
  const result = await prisma.book.findUniqueOrThrow({
    where: {
      bookId: id,
    },
  });

  return result;
};

const updateBook = async (data: Partial<IBook>, id: string) => {
  await prisma.book.findUniqueOrThrow({
    where: {
      bookId: id,
    },
  });

  const result = await prisma.book.update({
    where: {
      bookId: id,
    },
    data: data,
  });

  return result;
};

const deleteBook = async (id: string) => {
  const result = await prisma.book.delete({
    where: {
      bookId: id,
    },
  });

  return result;
};

export const BookService = {
  createBook,
  getBooks,
  getBookByID,
  updateBook,
  deleteBook,
};
