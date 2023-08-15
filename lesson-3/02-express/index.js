const express = require("express");

const auth = require("./middleware/auth");

const app = express();

app.use((req, _, next) => {
  console.log(`METHOD: ${req.method}; URL: ${req.url};`);
  next();
});

app.use((_, __, next) => {
  console.log("Middleware 1");
  next();
});

app.use((_, __, next) => {
  console.log("Middleware 2");
  next();
});

// app.use(auth);

app.get("/", (_, res) => {
  res.send("Hello World!");
});

// app.use("/movies", auth);

app.get("/movies", auth, (_, res) => {
  res.send([{ title: "Movie 1" }, { title: "Movie 2" }]);
});

app.post("/movies", auth, (_, res) => {
  res.send("Movies created successfully");
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
