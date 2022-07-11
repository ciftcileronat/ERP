const express = require("express");
const router = express.Router();
const { Titles } = require("../models");

router.get("/", async (req, res) => {
  res.send("Titles geldi");
});

module.exports = router;
