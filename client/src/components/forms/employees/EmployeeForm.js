import React, { useState } from "react";
import {
  Card,
  CardContent,
  Divider,
  Box,
  Typography,
  Button,
  FormControlLabel,
  TextField,
  FormControl,
  InputAdornment,
  OutlinedInput,
  CustomTextField,
} from "@mui/material";
import FeatherIcon from "feather-icons-react";
import CustomFormLabel from "../custom-elements/CustomFormLabel";
import DepartmentComboBox from "../combobox/DepartmentComboBox";
import TitleComboBox from "../combobox/TitleComboBox";

function EmployeeForm(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [department, setDepartment] = useState("");
  const [title, setTitle] = useState("");

  function createEmployeeSubmitHandler(e) {
    e.preventDefault();

    const employeeData = {
      username: username,
      email: email,
      password: password,
      fullname: fullname,
      department: department,
      title: title,
    };

    props.onCreateEmployee(employeeData);
  }

  return (
    <>
      <div>
        <Card
          sx={{
            p: 0,
          }}
        >
          <Box
            sx={{
              padding: "15px 30px",
            }}
            display="flex"
            alignItems="center"
          >
            <Box flexGrow={1}>
              <Typography fontWeight="500" variant="h4">
                Employee
              </Typography>
            </Box>
          </Box>
          <Divider />
          <CardContent
            sx={{
              padding: "30px",
            }}
          >
            <form onSubmit={createEmployeeSubmitHandler}>
              <FormControl fullWidth>
                <CustomFormLabel
                  sx={{
                    mt: 0,
                  }}
                  htmlFor="username-text"
                >
                  Username
                </CustomFormLabel>
                <OutlinedInput
                  startAdornment={
                    <InputAdornment position="start">
                      <FeatherIcon icon="user" width="20" />
                    </InputAdornment>
                  }
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  id="username"
                  placeholder="Username"
                  fullWidth
                  size="small"
                  required
                />
              </FormControl>
              <FormControl fullWidth>
                <CustomFormLabel htmlFor="mail-text">Fullname</CustomFormLabel>
                <OutlinedInput
                  startAdornment={
                    <InputAdornment position="start">
                      <FeatherIcon icon="user" width="20" />
                    </InputAdornment>
                  }
                  value={fullname}
                  onChange={(e) => {
                    setFullname(e.target.value);
                  }}
                  id="fullname-text"
                  placeholder="Fullname"
                  fullWidth
                  size="small"
                  required
                />
              </FormControl>
              {/* 2 */}
              <FormControl fullWidth>
                <CustomFormLabel htmlFor="mail-text">Email</CustomFormLabel>
                <OutlinedInput
                  startAdornment={
                    <InputAdornment position="start">
                      <FeatherIcon icon="mail" width="20" />
                    </InputAdornment>
                  }
                  id="mail-text"
                  placeholder="Email"
                  fullWidth
                  size="small"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
              </FormControl>
              {/* 3 */}
              <FormControl fullWidth>
                <CustomFormLabel htmlFor="pwd-text">Password</CustomFormLabel>
                <OutlinedInput
                  type="password"
                  startAdornment={
                    <InputAdornment position="start">
                      <FeatherIcon icon="lock" width="20" />
                    </InputAdornment>
                  }
                  id="pwd-text"
                  placeholder="Password"
                  fullWidth
                  size="small"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />
              </FormControl>

              <FormControl fullWidth>
                <CustomFormLabel htmlFor="cpwd-text">
                  Confirm Password
                </CustomFormLabel>
                <OutlinedInput
                  startAdornment={
                    <InputAdornment position="start">
                      <FeatherIcon icon="lock" width="20" />
                    </InputAdornment>
                  }
                  id="cpwd-text"
                  placeholder="Confirm Password"
                  fullWidth
                  size="small"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  required
                />
              </FormControl>

              <FormControl fullWidth>
                <CustomFormLabel htmlFor="cpwd-text">
                  Department
                </CustomFormLabel>
                <DepartmentComboBox
                  department={(value) => setDepartment(value)}
                />
              </FormControl>

              <FormControl fullWidth>
                <CustomFormLabel htmlFor="cpwd-text">Title</CustomFormLabel>
                <TitleComboBox updateTitle={(value) => setTitle(value)} />
              </FormControl>

              <FormControl></FormControl>

              <Divider />
              <Box pt={3}>
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  sx={{
                    mr: 1,
                  }}
                >
                  Submit
                </Button>
                <Button variant="contained" color="error">
                  Cancel
                </Button>
              </Box>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default EmployeeForm;
