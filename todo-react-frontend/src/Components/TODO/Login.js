import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "jarvis",
      password: "",
    };
  }

  onChange = (event) => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        Username :{" "}
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.onChange}
        />
        Password :{" "}
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.onChange}
        />
        <button>LOGIN</button>
      </div>
    );
  }
}
export default Login;
