// config data for mongo database
var mongo = {
  host: process.env.MONGO_HOST || '127.0.0.1',
  port: process.env.MONGO_PORT || 27017,
  masterDB: process.env.MONGO_DB || 'dvs',
  mongoURL :'',
  mongoAtlasURL :''
};

mongo.mongoURL = 'mongodb://' + mongo.host + ':' + mongo.port + '/' + mongo.masterDB;

mongo.mongoAtlasURL = 'mongodb+srv://dvs:admin@dvs-db-lbr2z.mongodb.net/dvs';

var config = {
  MONGO: mongo,
};
// export the config object
module.exports = config;
