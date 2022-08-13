import * as React from "react";
import { faker } from "@faker-js/faker";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/system";
import SearchBar from "material-ui-search-bar";
import { Avatar, Typography } from "@mui/material";
import Image from "next/image";
import moment from "moment";

console.log(faker.image.avatar());

const COLUMNS = [
  {
    field: "avatar",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => <Avatar src={params.row.avatar} />,
    sortable: false,
    filterable: false,
  },
  { field: "id", headerName: "ID", hide: true },
  { field: "username", headerName: "Username", minWidth: "150", flex: 0.5 },
  { field: "email", headerName: "Email", minWidth: "150", flex: 0.5 },
  {
    field: "actions",
    headerName: "Actions",
    type: "actions",
    //renderCell: (params) => <UserActions {...{ params, rowId, setRowId }} />,
    minWidth: "50",
    flex: 0.5,
  },
];

const USERS = [];
for (let i = 0; i < 100; i++) {
  USERS[i] = {
    avatar: faker.image.avatar(),
    id: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    actions: "UP" + " DEL",
  };
}

function Manual() {
  const [rowId, setRowId] = React.useState(null);
  return (
    <Box height={700} width={"%100"}>
      <Typography
        variant="h3"
        component="h3"
        sx={{ textAlign: "center", mt: 3, mb: 3 }}
      >
        Employees
      </Typography>
      <DataGrid
        columns={COLUMNS}
        rows={USERS}
        getRowId={(row) => row.id}
      ></DataGrid>
    </Box>
  );
}

export default Manual;
