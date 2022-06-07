var express = require("express");
var jsonServer = require("json-server");
var cors = require("cors");

var server = express();

server.use(cors());
server.use(
  require("prerender-node").set("prerenderToken", "vOmf0Y7wRvpytyOkPD0b")
);
server.use("/api", jsonServer.router("db.json"));

server.listen(8001);
