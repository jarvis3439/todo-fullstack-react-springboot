import React, { Component } from "react";
import LoginResponse from "./LoginResponse";
import Authentication from "../Security/Authentication";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loginStatus: "",
    };
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  loginResponse = () => {
    if (this.state.username === "jarvis" && this.state.password === "jarvis") {
      Authentication.loginSuccessfull(this.state.username);
      this.setState({
        loginStatus: true,
      });
      this.props.history.push(`/welcome/${this.state.username}`);
      window.location.reload(false);
    } else {
      this.setState({
        loginStatus: false,
      });
    }
  };

  render() {
    return (
      <div>
        <div className="login-form">
          <h1 className="text-center"> LOGIN </h1>
          <div className="form-group">
            <input
              placeholder="Username"
              className="form-control"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <input
              placeholder="Password"
              className="form-control"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary" onClick={this.loginResponse}>
              LOGIN
            </button>
          </div>
          <LoginResponse status={this.state.loginStatus} />
        </div>
      </div>
    );
  }
}
export default Login;
