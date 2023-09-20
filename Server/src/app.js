const express = require("express");
const morgan = require("morgan");
const routes = require("./routes/index");

const server = express();

// Middleware
server.use(express.json());
server.use(morgan("dev"));

// CORS headers
server.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, DELETE"
  );
  next();
});

// Routes
server.use("/rickandmorty", routes);

module.exports = server;

