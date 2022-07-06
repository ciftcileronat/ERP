import * as React from "react";
import axios, { Axios } from "axios";

function CreateEmployee() {
  const [userName, setUserName] = React.useState("");

  const submitReview = () => {
    axios
      .post("http://localhost:3001/api/insert", {
        userName: userName,
      })
      .then((res) => {
        alert("Added ID: " + res.data.insertId);
      });
  };
  return (
    <div className="App">
      <h1>CRUD OP</h1>

      <div className="form">
        <label>Username:</label>
        <input
          type="text"
          name="userName"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        ></input>
        <button onClick={submitReview}>Submit</button>
      </div>
    </div>
  );
}

export default CreateEmployee;
