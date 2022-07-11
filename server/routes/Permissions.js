const express = require("express");
const router = express.Router();
const { Permissions } = require("../models");

router.get("/", async (req, res) => {
  res.send("Permissions geldi");
});

module.exports = router;
