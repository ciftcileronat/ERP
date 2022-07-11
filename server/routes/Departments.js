const express = require("express");
const router = express.Router();
const { Departments } = require("../models");

router.get("/", async (req, res) => {
  res.send("geldi");
});

router.post("/", async (req, res) => {
  const post = req.body;
  await Departments.create(post);
  res.json(post);
});

module.exports = router;
