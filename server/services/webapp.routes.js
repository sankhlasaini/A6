var path = require("path");
var api = require("./../api/index");

var useRoutes = function (app) {
  app.use('/authentication', api.authentication);
  app.use('/user', api.user);
};

module.exports = {
  useRoutes: useRoutes
};
