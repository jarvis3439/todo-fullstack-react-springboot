import React, { Component } from "react";
import { Link } from "react-router-dom";

class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>Welcome {this.props.match.params.name}</h1>
        <h2>
          Click here to manage your <Link to="/todos">Todos</Link>
        </h2>
      </div>
    );
  }
}
export default Welcome;
