import React, { Component } from "react";
import LoginResponse from "./LoginResponse";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "jarvis",
      password: "",
      loginStatus: false,
    };
  }

  onChange = (event) => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  loginResponse = () => {
    if (this.state.username === "jarvis" && this.state.password === "jarvis") {
      this.setState({ loginStatus: true });
    } else {
      this.setState({ loginStatus: false });
    }
  };

  render() {
    return (
      <div>
        <LoginResponse status={this.state.loginStatus} />
        {/*    {this.state.loginStatus === true ? (
           <div>Login Successfull</div>
         ) : (
           <div>Login Failed</div>
        )} */}
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
        <button onClick={this.loginResponse}>LOGIN</button>
      </div>
    );
  }
}
export default Login;
