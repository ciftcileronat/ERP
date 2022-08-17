import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Card,
  Grid,
  Typography,
  Button,
  TextField,
  FormControl,
} from "@mui/material";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import av1 from "../../assets/images/users/4.jpg";
import CustomTextField from "../../src/components/forms/custom-elements/CustomTextField";
import CustomFormLabel from "../../src/components/forms/custom-elements/CustomFormLabel";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import axios from "axios";
import DepartmentComboBox from "../../src/components/forms/combobox/DepartmentComboBox";
import TitleComboBox from "../../src/components/forms/combobox/TitleComboBox";

function employeeDetailPage() {
  const router = useRouter();
  const [id, setId] = useState("");
  const [username, setUsername] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [title, setTitle] = useState("");
  const [department, setDepartment] = useState("");
  const [fullname, setFullname] = useState("");

  const notyf = new Notyf({
    position: {
      x: "right",
      y: "top",
    },
  });

  useEffect(() => {
    setId(router.query.empId);
    axios
      .post("http://localhost:3001/employees/employee", {
        id: id,
      })
      .then((response) => {
        console.log(response.data);
        setUsername(response.data.username);
        setFullname(response.data.fullname);
        setDateOfBirth(response.data.dateOfBirth);
        setTitle(response.data.title);
        setDepartment(response.data.department);
      });
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();

    const employeeData = {
      id: id,
      username: username,
      fullname: fullname,
      dateOfBirth: dateOfBirth,
      department: department,
      title: title,
      totalSalary: 0,
      sex: "M",
    };

    axios
      .post("http://localhost:3001/employees/update", employeeData)
      .then((response) => {
        if (response.error) {
          notyf.error(response.message);
        } else {
          notyf.success("Successful!");
          //router.replace("/employees/all");
        }
      });
  }

  function handleDeleteEmployee(e) {
    e.preventDefault();

    if (confirm("This Employee will be removed are you sure?")) {
      axios
        .post("http://localhost:3001/employees/delete", { id: id })
        .then((response) => {
          if (response.error) {
            notyf.error(response.message);
          } else {
            notyf.success("Successful!");
            router.replace("/employees/all");
          }
        });
    } else {
      //Do nothing
    }
  }

  return (
    <Grid container spacing={0}>
      <Grid item lg={4} md={12} xs={12}>
        <Card sx={{ p: 3 }}>
          <Image
            alt="Remy Sharp"
            src={av1}
            width="110"
            height="110"
            className="roundedCircle"
          />
          <Typography variant="h2" sx={{ mt: 1 }}>
            {fullname}
          </Typography>
          <Typography variant="body2">{title}</Typography>
          <Typography variant="h6" fontWeight="600" sx={{ mt: 3, mb: 1 }}>
            Address
          </Typography>
          <Typography variant="body2">
            11, Avenue Ganesh, Near Osia plex, opposit Apex Tower, New York, USA
          </Typography>
          <Button
            color="error"
            variant="contained"
            sx={{ mt: 3 }}
            value={id}
            onClick={handleDeleteEmployee}
          >
            Delete Account
          </Button>
        </Card>
      </Grid>
      <Grid item lg={8} md={12} xs={12}>
        <Card sx={{ p: 3 }}>
          <Typography variant="h6" fontWeight="600" sx={{ mb: 3 }}>
            Edit Details
          </Typography>
          <form onSubmit={handleSubmit}>
            <CustomFormLabel htmlFor="fullname">Username</CustomFormLabel>
            <CustomTextField
              id="name"
              variant="outlined"
              defaultValue="Nirav Joshi"
              fullWidth
              size="small"
              sx={{ mb: 2 }}
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />

            <CustomFormLabel htmlFor="name">Fullname</CustomFormLabel>
            <CustomTextField
              id="name"
              variant="outlined"
              defaultValue="Nirav Joshi"
              fullWidth
              size="small"
              sx={{ mb: 2 }}
              value={fullname}
              onChange={(e) => {
                setFullname(e.target.value);
              }}
            />
            <FormControl fullWidth>
              <CustomFormLabel htmlFor="cpwd-text">
                Date of Birth
              </CustomFormLabel>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                  inputFormat="MM/dd/yyyy"
                  renderInput={(params) => <TextField {...params} />}
                  value={dateOfBirth}
                  onChange={(e) => {
                    setDateOfBirth(e);
                  }}
                />
              </LocalizationProvider>
            </FormControl>

            <CustomFormLabel htmlFor="cpwd-text">Department</CustomFormLabel>
            <DepartmentComboBox
              department={(value) => setDepartment(value)}
              currentDepartment={department}
            />

            <CustomFormLabel htmlFor="cpwd-text">Title</CustomFormLabel>
            <TitleComboBox
              updateTitle={(value) => setTitle(value)}
              currentTitle={title}
            />

            <FormControl>
              <Button color="primary" variant="contained" type="submit">
                Update
              </Button>
            </FormControl>
          </form>
        </Card>
      </Grid>
    </Grid>
  );
}

export default employeeDetailPage;
