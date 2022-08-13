import EmployeesItem from "./EmployeesItem";

function EmployeesList(props) {
  return (
    <table border="1">
      <thead>
        <th>ID</th>
        <th>Username</th>
        <th>Fullname</th>
        <th>Department</th>
        <th>Title</th>
        <th>Date of Birth</th>
        <th>Actions</th>
      </thead>
      <tbody>
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
      </tbody>
    </table>
  );
}

export default EmployeesList;
