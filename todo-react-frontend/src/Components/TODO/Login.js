import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div>
        Username : <input type="text" name="username" />
        Password : <input type="password" name="password" />
        <button>LOGIN</button>
      </div>
    );
  }
}
export default Login;
