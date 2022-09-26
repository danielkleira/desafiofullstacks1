import express from "express";
import { routes } from "./routes";
import { errorMiddleware } from "./middlewares/error.middleware";
import { Request, Response } from "express";

const app = express();
app.use(express.json());

app.use("/", routes);

app.use(errorMiddleware);

export default app;
app.listen(process.env.PORT || 3000)
