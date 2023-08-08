const fs = require("node:fs/promises");

fs.writeFile("write.txt", "Another content added")
  .then(() => console.log("File written successfully"))
  .catch((err) => console.error(err));
