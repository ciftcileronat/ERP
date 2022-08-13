import { Grid } from "@mui/material";
import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import DepartmentComboBox from "../../src/components/forms/combobox/DepartmentComboBox";

function AllDepartments() {
  const [listOfDepartments, setListOfDepartments] = useState([]);

  const departmentRef = useRef();

  function submitHandler(e) {
    e.preventDefault();
    const gelen = departmentRef.current.value;
    console.log(gelen);
  }

  useEffect(() => {
    axios.post("http://localhost:3001/departments/all").then((response) => {
      setListOfDepartments(response.data);
    });
  }, []);
  return (
    <Grid>
      <h1>empty</h1>
      {listOfDepartments.map((value, key) => {
        return (
          <ul>
            <li>{value.id}</li>
            <li>{value.department}</li>
            <li>{value.code}</li>
          </ul>
        );
      })}
      <form onSubmit={submitHandler}>
        <input ref={departmentRef} />
        <button>Yolla</button>
      </form>
    </Grid>
  );
}

export default AllDepartments;
