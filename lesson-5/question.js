const express = require("express");

const app = express();

function greeting(req, res) {
  return res.send("Hello World!");
}

// app.get("/", greeting);
// app.post("/", greeting);
// app.put("/", greeting);
// app.delete("/", greeting);

app.all("/", greeting);

app.all("/ping", (req, res) => {
  return res.send("pong");
});
