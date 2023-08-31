const express = require("express");

const app = express();

const routes = require("./routes");

app.get("/ping", (req, res) => {
  res.send("pong");
});

// application routes
app.use("/api", routes);

app.use((req, res, next) => {
  res.status(404).send({ message: "Not Found" });
});

app.use((error, req, res, next) => {
  console.error(error);

  res.status(500).send({ message: "Internal Server Error" });
});

module.exports = app;
