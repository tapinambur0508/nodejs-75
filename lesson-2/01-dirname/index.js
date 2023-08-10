const movies = require("./movies/index.js");

movies
  .read()
  .then((data) => console.log(data.map((movie) => movie.Title)))
  .catch((err) => console.error(err));
