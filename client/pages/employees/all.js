import React, { useState, useEffect } from "react";
import axios from "axios";
import EmployeesList from "../../src/components/employees/EmployeesList";

function AllEmployee() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.post("http://localhost:3001/employees/all").then((response) => {
      setEmployees(response.data);
      console.log("rendered");
    });
  }, []);

  return <EmployeesList employees={employees} />;
}

export default AllEmployee;
