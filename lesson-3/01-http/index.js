const http = require("node:http");

const server = http.createServer((request, response) => {
  console.log({ url: request.url });
  console.log({ method: request.method });

  const { url, method } = request;

  if (url === "/") {
    response.statusCode = 200;
    return response.end("Hello World!");
  }

  if (url === "/movies" && method === "GET") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");
    return response.end(
      JSON.stringify([
        { title: "The Godfather" },
        { title: "The Godfather: Part II" },
      ])
    );
  }

  if (url === "/movies" && method === "POST") {
    response.statusCode = 200;
    return response.end("Movies created successfully!");
  }

  response.statusCode = 404;
  return response.end("Not found");
});

server.listen(8080, () => {
  console.log("Server running on port 8080");
});
