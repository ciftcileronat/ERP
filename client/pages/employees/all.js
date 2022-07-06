import { Grid } from "@mui/material";
import * as React from "react";
import { Button } from "@mui/material";
import axios from "axios";
import EmployeeTable from "../tables/employees";

function AllEmployee() {
  return (
    <Grid>
      <EmployeeTable />
    </Grid>
  );
}

export default AllEmployee;
