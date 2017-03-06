"use strict";

var express = require("express");
var https = require("https");
var fs = require("fs");

var app = express();

app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1><br><form method='POST' action='/submitKey'><label>Secret: </label><input type='password'/><input type='submit' value='Submit Secret'/></form>");
});

app.post("/submitKey", function (req, res) {
  res.send("<h3>Your key submitted successfully!</h3>");
});


var options = {
  key: fs.readFileSync("example.key"),
  cert: fs.readFileSync("example.crt")
};

var server = https.createServer(options, app)
console.log("[+] Simple HTTPS server is running on 8080");
server.listen(8080);