import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

const globalErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
    success: false,
    status: error.status || httpStatus.INTERNAL_SERVER_ERROR,
    massage: error?.message || "Something went wrong",
  });
};

export default globalErrorHandler;
