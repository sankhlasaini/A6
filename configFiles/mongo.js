var mongoose = require("mongoose");

var config = require("./mongoConfig");

function setupMongooseConnections() {

  mongoose.connect(config.MONGO.mongoAtlasURL);

  mongoose.connection.on('connected', () => {
    console.log('MongoDB is Connected to', config.MONGO.mongoAtlasURL);
  });
}

module.exports = {
  setupMongooseConnections: setupMongooseConnections
};
