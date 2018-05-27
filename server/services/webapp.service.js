var appRoutes = require("./webapp.routes");

function setupRestRoutes(app) {
  console.log("Setting up Rest Routes\n");
  appRoutes.useRoutes(app);
}

module.exports = {
    setupRestRoutes : setupRestRoutes
};