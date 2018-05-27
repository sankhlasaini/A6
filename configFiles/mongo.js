var mongoose = require("mongoose");

var config = require("./mongoConfig");

function setupMongooseConnections() {

  mongoose.connect(config.MONGO.mongoURL);

  mongoose.connection.on('connected', () => {
    console.log('MongoDB is Connected to', config.MONGO.mongoURL);
  });
}

module.exports = {
  setupMongooseConnections: setupMongooseConnections
}
