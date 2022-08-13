import React from "react";

function EmployeesItem(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.username}</td>
      <td>{props.fullname}</td>
      <td>{props.department}</td>
      <td>{props.title}</td>
      <td>{props.dateOfBirth}</td>
      <td>
        <button id={props.id}>Edit</button>
      </td>
    </tr>
  );
}

export default EmployeesItem;
