import React, { Component } from "react";
import { Link } from "react-router-dom";

class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>Todo Management Application </h1>
        <div className="container">
          Welcome {this.props.match.params.name}. Click here to manage your{" "}
          <Link to="/todos">
            <u>Todos</u>
          </Link>
          .
        </div>
      </div>
    );
  }
}
export default Welcome;
