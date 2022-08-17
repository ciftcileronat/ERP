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
  try {
    console.log(req.body);
    const employee = await Employees.findOne({ where: { id: req.body.id } });
    if (employee) {
      res.send(employee);
    } else {
      res.json({ message: "User is not exist!", type: 0 });
    }
  } catch (e) {
    console.log("ERROR! " + e);
  }
});

router.post("/create", async (req, res) => {
  console.log(req.body);
  Employees.create({
    username: req.body.username,
    fullname: req.body.fullname,
    title: req.body.title,
    department: req.body.department,
    dateOfBirth: req.body.dateOfBirth,
    totalSalary: req.body.totalSalary,
    sex: req.body.sex,
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

router.post("/update", async (req, res) => {
  Employees.update(
    {
      username: req.body.username,
      fullname: req.body.fullname,
      title: req.body.title,
      department: req.body.department,
      dateOfBirth: req.body.dateOfBirth,
      totalSalary: req.body.totalSalary,
      sex: req.body.sex,
    },
    { where: { id: req.body.id } }
  ).then((users) => {
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

router.post("/delete", async (req, res) => {
  console.log(req.body.id);

  const deleteUser = await Employees.destroy({ where: { id: req.body.id } });

  if (deleteUser) {
    res.json({
      message: "Successful!",
      type: 1,
    });
  } else {
    res.status(400);
  }
});

module.exports = router;
