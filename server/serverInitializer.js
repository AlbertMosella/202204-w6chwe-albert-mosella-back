require("dotenv").config();
const debug = require("debug")("robots:initialize");
const chalk = require("chalk");

const initializeServer = (port, app) => {
  const server = app.listen(port, () => {
    debug(chalk.green(`Server listening on port ${port}`));
  });
  server.on("error", (error) => {
    debug(chalk.red("Ha petao el server"));
    if (error.code === "EADDRINUSE") {
      debug(chalk.red(`Port ${port} busy`));
    }
  });
};

module.exports = {
  initializeServer,
};
