const express = require("express");

const router = express.Router();

const userRoutes = require("./users");
const productRoutes = require("./products");

router.use("/users", userRoutes);
router.use("/products", productRoutes);

module.exports = router;
