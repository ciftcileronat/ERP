import { Grid } from "@mui/material";
import * as React from "react";
import { Button } from "@mui/material";
import axios from "axios";

function AllDepartments() {
  const [listOfDepartments, setListOfDepartments] = React.useState([]);

  React.useEffect(() => {
    axios.get("http://localhost:3001/deps").then((response) => {
      setListOfDepartments(response.data);
    });
  }, []);
  return (
    <Grid>
      <h1>empty</h1>
      {listOfDepartments.map((value, key) => {
        return <div>{value.name}</div>;
      })}
    </Grid>
  );
}

export default AllDepartments;
