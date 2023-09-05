const express = require("express");

const auth = require("../middleware/auth");

const router = express.Router();

const authRoutes = require("./auth");
const bookRoutes = require("./books");
const userRoutes = require("./users");

router.use("/auth", authRoutes);
router.use("/books", auth, bookRoutes);
router.use("/users", auth, userRoutes);

module.exports = router;
