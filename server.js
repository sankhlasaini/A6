var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require("body-parser");
var http = require("http");
var webService = require('./server/services/webapp.service');
var mongo = require("./configFiles/mongo"); 

var port = process.env.port || "3000";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static(path.join(__dirname, "dist")));

app.set("port", port);

var server = http.createServer(app);

webService.setupRestRoutes(app);

mongo.setupMongooseConnections();

server.listen(port, () => {
  console.log('Server Started On :', port);
});
