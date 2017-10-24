const express = require("express");
const app = express();
const server = require("http").Server(app);
const pubdir = __dirname + "/public";

server.listen(process.env.PORT || 80);

app.get("*", function (req, res, next) {
    next();
});

app.use(express.static(pubdir));