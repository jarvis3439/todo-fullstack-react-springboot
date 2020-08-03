import { Component } from "react";

class AuthTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserLoggedIn: "",
    };
  }
  userLoggedIn = () => {
    let user = sessionStorage.getItem("user");
    if (user === null || user === "") {
      return this.setState({ isUserLoggedIn: false });
    } else {
      return this.setState({ isUserLoggedIn: true });
    }
  };
  render() {
    return this.userLoggedIn;
  }
}
export default AuthTest;
