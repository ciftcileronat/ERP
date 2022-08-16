import * as React from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import { EmployeeForm } from "../../src/components/forms/employees/index";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import { useRouter } from "next/dist/client/router";

function CreateEmployee() {
  const router = useRouter();

  const notyf = new Notyf({
    position: {
      x: "right",
      y: "top",
    },
  });

  async function createEmployeeSubmitHandler(employeeData) {
    console.log(employeeData);

    axios
      .post("http://localhost:3001/employees/create", employeeData)
      .then((response) => {
        if (response.error) {
          notyf.error(response.message);
        } else {
          notyf.success("Successful!");
          router.replace("/employees/all");
        }
      });
  }
  return (
    <Grid item lg={12} md={12} xs={12}>
      <EmployeeForm onCreateEmployee={createEmployeeSubmitHandler} />
    </Grid>
  );
}

export default CreateEmployee;
