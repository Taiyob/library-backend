import prisma from "../../../shared/prisma";

const borrowBook = async (payload: { bookId: string; memberId: string }) => {
  const result = await prisma.borrowRecord.create({
    data: {
      bookId: payload.bookId,
      memberId: payload.memberId,
    },
  });

  return result;
};

const returnBook = async (borrowId: string) => {
  await prisma.borrowRecord.findUniqueOrThrow({
    where: {
      borrowId: borrowId,
    },
  });

  const result = await prisma.borrowRecord.update({
    where: {
      borrowId: borrowId,
    },
    data: {
      returnDate: new Date(),
    },
  });

  return result;
};

export const BorrowRecordService = { borrowBook, returnBook };
