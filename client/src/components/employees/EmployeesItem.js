import React from "react";
import { useRouter } from "next/router";
import { Button, TableCell, TableRow } from "@mui/material";

function EmployeesItem(props) {
  const router = useRouter();

  function handleEditEmployee(e) {
    let employeeId = e.target.id;
    console.log(employeeId);
    router.push("/employees/" + employeeId);
  }

  return (
    <TableRow>
      <TableCell>{props.id}</TableCell>
      <TableCell>{props.username}</TableCell>
      <TableCell>{props.fullname}</TableCell>
      <TableCell>{props.department}</TableCell>
      <TableCell>{props.title}</TableCell>
      <TableCell>{props.dateOfBirth}</TableCell>
      <TableCell>
        <Button
          variant="contained"
          color="primary"
          sx={{}}
          aria-label="primary-bell"
          id={props.id}
          onClick={handleEditEmployee}
        >
          Edit
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default EmployeesItem;
