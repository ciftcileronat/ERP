const express = require("express");
const router = express.Router();
const { Titles } = require("../models");

router.post("/all", async (req, res) => {
  const allTitles = await Titles.findAll();
  res.json(allTitles);
});

module.exports = router;
