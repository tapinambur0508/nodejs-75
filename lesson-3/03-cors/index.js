const cors = require("cors");
const express = require("express");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

app.get("/movies", (req, res) => {
  res.send([
    { title: "The Godfather" },
    { title: "The Dark Knight" },
    { title: "The Lord of the Rings" },
  ]);
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
