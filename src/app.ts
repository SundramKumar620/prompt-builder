import express from "express";
import routes from "./routes";
import errorHandler from "./middleware/error.middleware";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(cookieParser());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

app.use("/api", routes);

app.use(errorHandler);

export default app;