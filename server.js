/**
 * Created by roy.astronomia on 30/01/2017.
 */
var http = require('http');
var express = require('express');
var app = express();
var controllers = require('./controllers');

app.set("view engine",  "vash");

// Set the public static resource folder
app.use(express.static(__dirname + "/public"));

// Map the routes
controllers.init(app);

app.get("/api/users", function(req, res){
   res.set("Content-Type", "application/json");
   res.send({ name: "Roy", isValid: true, group: "Admin"});
});

var server = http.createServer(app);

server.listen(3000);