const fs = require("node:fs/promises");

fs.appendFile("append.txt", "Hello World!\n")
  .then(() => console.log("File written successfully"))
  .catch((err) => console.log(err));
