const express = require("express");
const router = express.Router();
const { Employees } = require("../models");

router.get("/all", async (req, res) => {
  const employees = await Employees.findAll();
  res.json(employees);
});

/*
router.get("/", async (req, res) => {
  console.log(req.body);
  console.log("geldi");
  res.send("geldi");
});
*/

router.post("/employee", async (req, res) => {
  console.log(req.body);
  const employee = await Employees.findOne({ where: { id: req.body.id } });
  res.send(employee);
});

router.post("/create", async (req, res) => {
  console.log(req.body);
  Employees.create({
    username: req.body.username,
    fullname: req.body.fullname,
    title: req.body.title,
    department: req.body.department,
    dateOfBirth: req.body.dateOfBirth,
    totalSalary: 0,
    sex: "F",
  }).then(function (users) {
    if (users) {
      res.json({
        message: "Successful!",
        type: 1,
        userId: users.id,
      });
    } else {
      res.status(400);
    }
  });
});

module.exports = router;
