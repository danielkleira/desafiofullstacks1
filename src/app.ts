import cors from "cors";
import express from "express";
import { routes } from "./routes";
import handleAppErrorMiddleware from "./middlewares/error.middleware";
import { Request, Response } from "express";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/", routes);

app.use(handleAppErrorMiddleware);

export default app;
app.listen(process.env.PORT || 3001);
