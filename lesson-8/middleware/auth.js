const jwt = require("jsonwebtoken");

const User = require("../models/user.js");

function auth(req, res, next) {
  const authHeader = req.headers.authorization || "";

  const [bearer, token] = authHeader.split(" ", 2);

  if (bearer !== "Bearer") {
    return res.status(401).send({ message: "No token provided" });
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, decode) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        return res.status(401).send({ message: "Token is expired" });
      }

      return next(err);
    }

    try {
      const user = await User.findById(decode.id).exec();

      if (user.token !== token) {
        return res.status(401).send({ message: "You are not authorize" });
      }

      req.user = { id: decode.id, name: decode.name };

      next();
    } catch (err) {
      next(err);
    }
  });
}

module.exports = auth;
