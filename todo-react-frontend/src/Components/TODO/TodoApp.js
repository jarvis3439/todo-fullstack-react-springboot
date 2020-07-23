import React, { Component } from "react";
import Login from "./Login";

class TodoApp extends Component {
  render() {
    return (
      <div className="TodoApp">
        <h1>My TODO Application</h1>
        <Login />
      </div>
    );
  }
}
export default TodoApp;
