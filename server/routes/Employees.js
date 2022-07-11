const express = require("express");
const router = express.Router();
const { Employees } = require("../models");

router.get("/", async (req, res) => {
  res.send("employees geldi");
});

module.exports = router;
