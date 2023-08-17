const crypto = require("node:crypto");
const express = require("express");

const bookSchema = require("./schemas/book.js");

const app = express();

const jsonParser = express.json();

app.post("/books", jsonParser, (req, res) => {
  const { error, value } = bookSchema.validate(req.body, {
    abortEarly: false,
    allowUnknown: true,
  });

  if (typeof error !== "undefined") {
    res.status(400).send(error.details[0].message);
  }

  const newBook = {
    id: crypto.randomUUID(),
    title: value.title,
    author: value.author,
    pages: value.pages,
    sale: value.sale,
  };

  res.status(201).send(newBook);
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
