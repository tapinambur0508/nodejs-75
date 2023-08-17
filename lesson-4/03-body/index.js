const express = require("express");

const app = express();

const jsonParser = express.json();

// app.use(jsonParser);

app.post("/", jsonParser, (req, res) => {
  const { title, author } = req.body;

  console.log({ title, author });

  res.send("Book created");
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
