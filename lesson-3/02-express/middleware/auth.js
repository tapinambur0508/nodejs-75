function auth(req, res, next) {
  const { apiKey } = req.query;

  if (apiKey !== "12345") {
    return res.status(401).send({ message: "Unauthorized" });
  }

  next();
}

module.exports = auth;
