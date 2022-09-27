import express from "express";
import { routes } from "./routes";
import { errorMiddleware } from "./middlewares/error.middleware";
import { Request, Response } from "express";
var cors = require('cors')


const app = express();
app.use(cors())
app.use(express.json());

app.use("/", routes);

app.use(errorMiddleware);

export default app;
app.listen(process.env.PORT || 3000)
