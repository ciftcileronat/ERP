const express = require("express");
const router = express.Router();
const { Departments } = require("../models");

router.post("/all", async (req, res) => {
  const allDepartments = await Departments.findAll();
  res.json(allDepartments);
});

router.post("/create", async (req, res) => {
  const post = req.body;
  await Departments.create(post);
  res.json(post);
});

module.exports = router;
