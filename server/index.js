require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const robotsRouter = require("./routers/robotsRouters");
const usersRouter = require("./routers/usersRouters");
const { errorDefault, notFoundError } = require("./middlewares/errors");

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use("/", robotsRouter);
app.use("/users", usersRouter);
app.use(notFoundError);
app.use(errorDefault);

module.exports = app;
