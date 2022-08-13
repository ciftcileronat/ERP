import React, { useEffect, useState } from "react";
import axios from "axios";
import { Autocomplete, TextField } from "@mui/material";

function DepartmentComboBox(props) {
  const [listOfDepartments, setListOfDepartments] = useState([]);

  useEffect(() => {
    axios.post("http://localhost:3001/departments/all").then((response) => {
      setListOfDepartments(response.data);
    });
  }, []);

  const departments = listOfDepartments.map((value, key) => {
    return value.department;
  });

  return (
    <Autocomplete
      onChange={(e) => props.department(e.target.innerText)}
      disablePortal
      id="department"
      options={departments}
      fullWidth
      renderInput={(params) => (
        <TextField
          {...params}
          size="small"
          placeholder="Select department"
          aria-label="Select department"
          required
        />
      )}
    />
  );
}

export default DepartmentComboBox;
