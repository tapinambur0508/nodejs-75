const express = require("express");

const app = express();

app.get("/books/:id/", (req, res) => {
  const { id } = req.params;

  res.send(`Book with id ${id} was found`);
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
