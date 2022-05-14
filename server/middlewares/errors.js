const chalk = require("chalk");
const debug = require("debug")("robots:errors");

const notFoundError = (req, res) => {
  res.status(404);
  res.json({ msg: "Endpoint not found" });
};
// eslint-disable-next-line no-unused-vars
const errorDefault = (error, req, res, next) => {
  debug(chalk.red(error.message));
  res.status(500).json({ msg: "Error a.k.a. En mi maquina funcionaba" });
};

module.exports = { notFoundError, errorDefault };
