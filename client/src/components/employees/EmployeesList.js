import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Avatar,
  Chip,
} from "@mui/material";

import EmployeesItem from "./EmployeesItem";

function EmployeesList(props) {
  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            overflow: {
              xs: "auto",
              sm: "unset",
            },
          }}
        >
          <Table>
            <TableHead>
              <TableCell>ID</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Fullname</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Date of Birth</TableCell>
              <TableCell>Actions</TableCell>
            </TableHead>
            <TableBody>
              {props.employees.map((employee) => (
                <EmployeesItem
                  id={employee.id}
                  username={employee.username}
                  fullname={employee.fullname}
                  department={employee.department}
                  title={employee.title}
                  dateOfBirth={employee.dateOfBirth}
                />
              ))}
            </TableBody>
          </Table>
        </Box>
      </CardContent>
    </Card>
  );
}

export default EmployeesList;
