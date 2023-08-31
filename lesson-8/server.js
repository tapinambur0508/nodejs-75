require("./db");

const app = require("./app");

const PORT = process.env.PORT || 8080;

app.listen({ port: PORT }, () => {
  console.log(`Server started on port ${PORT}`);
});
