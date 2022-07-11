const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const db = require("./models");

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*
 !                     ROUTERS                     !
*/

const departmentsRouter = require("./routes/Departments");
app.use("/departments", departmentsRouter);

const employeesRouter = require("./routes/Employees");
app.use("/employees", employeesRouter);

const permissionsRouter = require("./routes/Permissions");
app.use("/permissions", permissionsRouter);

const salariesRouter = require("./routes/Salaries");
app.use("/salaries", salariesRouter);

const titlesRouter = require("./routes/Titles");
app.use("/titles", titlesRouter);

const usersRouter = require("./routes/Users");
app.use("/users", usersRouter);

/*
 !                     ROUTERS                     !
*/
