const fs = require("node:fs/promises");
const path = require("node:path");

async function read() {
  // console.log(__dirname);
  // console.log(__filename);

  const filePath = path.join(__dirname, "..", "data", "movies.json"); // path.join(__dirname, "../data/movies.json");

  console.log(filePath);

  const data = await fs.readFile(filePath, { encoding: "utf-8" });

  return JSON.parse(data);
}

module.exports = { read };
