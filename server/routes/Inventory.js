const express = require("express");
const router = express.Router();
const { Inventory } = require("../models");

router.get("/all", async (req, res) => {
  const allItems = await Inventory.findAll();
  res.json(allItems);
});

module.exports = router;
