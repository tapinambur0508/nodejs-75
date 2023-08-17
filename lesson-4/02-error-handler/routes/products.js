const express = require("express");

const router = express.Router();

// GET /api/products
router.get("/", (req, res) => {
  res.send("Products");
});

// POST /api/products
router.post("/", (req, res) => {
  res.send("Product created");
});

module.exports = router;
