const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");

router.post("/all", async (req, res) => {});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await Users.findOne({ where: { username: username } });

  if (user) {
    bcrypt.compare(password, user.password).then((match) => {
      if (match) {
        res.json({ message: "Successful!", type: 1 });
      } else {
        res.json({ message: "Wrong password!", type: 0 });
      }
    });
  } else {
    res.json({ message: "User is not exist!", type: 0 });
  }
});

router.post("/create", async (req, res) => {
  const { username, email, password, isActive } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      username: username,
      email: email,
      password: hash,
      isActive: isActive,
    });
    res.json("SUCCESS!");
  });
});

router.post("/update", async (req, res) => {});

router.post("/delete", async (req, res) => {});

module.exports = router;
