// const fs = require("node:fs");

// console.log("Before");

// fs.readFile("read.txt", "utf-8", (err, data) => {
//   // fs.readFile("read.txt", { encoding: "utf-8" }, (err, data) => {
//   if (err) throw err;

//   console.log(data);
// });

// fs.promises
//   .readFile("read.txt", "utf-8")
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// console.log("After");

const fs = require("node:fs/promises");

fs.readFile("read.txt", "utf-8")
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

async function readFile(path) {
  const data = await fs.readFile(path, "utf-8");

  return data;
}

readFile("read.txt")
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
