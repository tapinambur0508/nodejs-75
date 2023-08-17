const fs = require("node:fs/promises");
const path = require("node:path");
const express = require("express");

const routes = require("./routes");

const app = express();

app.get("/", async (req, res, next) => {
  try {
    const data = await fs.readFile(
      path.join(__dirname, "unknown.txt"),
      "utf-8"
    );

    res.send(data);
  } catch (error) {
    next(error);
  }
});

app.use("/api", routes);

app.use((_, res, __) => {
  res.status(404).send({ message: "Not Found" });
});

app.use((error, _, res, __) => {
  console.error(error);

  res.status(500).send({ message: "Internal Server Error" });
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
