var authentication = require("./authentication/authentication.router");
var user = require("./user/user.router");

module.exports = {
  authentication: authentication,
  user: user
};
