import fs from "node:fs/promises";

// Instruction for Executing ES6 Modules:
// Method 1: Modify the file extension to '.mjs'
// Method 2: Create package.json file with following properties: { "type": "module" }

fs.readFile("file.txt", "utf-8")
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
