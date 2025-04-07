import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./app/routes";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import notFoundError from "./app/middleware/notFoundError";

const app = express();

app.use(cors());
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send({
    Message: "Library Server root point is running successfully!!!",
  });
});

app.use("/api", router);

app.use(globalErrorHandler);

app.use(notFoundError);

export default app;
