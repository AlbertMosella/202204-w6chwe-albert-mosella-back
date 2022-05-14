require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const robotsRouter = require("./routers/robotsRouters");
const { errorDefault, notFoundError } = require("./middlewares/errors");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use("/", robotsRouter);
app.use(notFoundError);
app.use(errorDefault);

module.exports = app;
