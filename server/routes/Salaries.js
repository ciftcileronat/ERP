const express = require("express");
const router = express.Router();
const { Salaries } = require("../models");

router.get("/", async (req, res) => {
  res.send("Salaries geldi");
});

module.exports = router;
