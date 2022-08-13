import React, { useEffect, useState } from "react";
import axios from "axios";
import { Autocomplete, TextField } from "@mui/material";

function DepartmentComboBox(props) {
  const [listOfTitles, setListOfTitles] = useState([]);

  useEffect(() => {
    axios.post("http://localhost:3001/titles/all").then((response) => {
      setListOfTitles(response.data);
    });
  }, []);

  const titles = listOfTitles.map((value, key) => {
    return value.title;
  });

  return (
    <Autocomplete
      onChange={(e) => props.updateTitle(e.target.innerText)}
      disablePortal
      id="title"
      options={titles}
      fullWidth
      renderInput={(params) => (
        <TextField
          {...params}
          size="small"
          placeholder="Select title"
          aria-label="Select title"
          required
        />
      )}
      required
    />
  );
}

export default DepartmentComboBox;
