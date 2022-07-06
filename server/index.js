const express = require("express");
const mysql = require("mysql");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");

app.listen(3001, () => {
  console.log("Running on port 3001");
});

var con = mysql.createConnection({
  host: "23.88.39.180",
  user: "admin_admin",
  password: "usBrnK8MJ0",
  database: "admin_erp",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  console.log("Request arrived...");
  res.send("This is response from request");
});

app.post("/api/insert", (req, res) => {
  const userName = req.body.userName;
  var values = [[0, userName]];

  const sqlInsert = "INSERT INTO us (id, name) VALUES ?";
  con.query(sqlInsert, [values], (err, result) => {
    if (err) {
      console.log(err);
      return console.log("Error...");
    }
    console.log("Added..." + result.insertId);
    res.send(result); //{ userName: userName, id: result.insertId }
  });
});

app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM us";
  con.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.post("/api/login", (req, res) => {
  console.log(req.body);
  /*
  con.query(sqlQuery, req.body.username, (err, result) => {
    if (err) {
      return console.log("Error...");
    } else {
      res.send(result);
      /*
      if (result.cnt > 0) {
      } else {
        res.send("User not found");
      }
      
    }
    
  });
  */
});
