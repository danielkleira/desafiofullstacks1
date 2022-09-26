import express from "express";
import { routes } from "./routes";
import { errorMiddleware } from "./middlewares/error.middleware";
import { Request, Response } from "express";

const app = express();
app.use(express.json());

app.use("/", routes);

app.use(errorMiddleware);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

export default app;
app.listen(3000);
