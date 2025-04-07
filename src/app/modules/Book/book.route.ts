import express from "express";
import { BookController } from "./book.controller";

const route = express.Router();

route.post("/", BookController.createBookIntoDB);
route.get("/", BookController.getBooksFromDB);
route.get("/:id", BookController.getBookByIDFromDB);
route.put("/:id", BookController.updateBookIntoDB);
route.delete("/:id", BookController.deleteBookFromDB);

export const BookRoute = route;
