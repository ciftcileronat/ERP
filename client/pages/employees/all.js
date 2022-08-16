import React, { useState, useEffect } from "react";
import axios from "axios";
import EmployeesList from "../../src/components/employees/EmployeesList";

function AllEmployee(props) {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/employees/all").then((response) => {
      setEmployees(response.data);
    });
  }, []);

  return <EmployeesList employees={employees} />;
}

/*
export async function getStaticProps() {
  const result = await axios.get("http://localhost:3001/employees/all");
  const employees = result.data;

  return {
    props: {
      employees: employees,
    },
  };
}
*/
export default AllEmployee;
