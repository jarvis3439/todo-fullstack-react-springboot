import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthenticationService from "../Security/AuthenticationService";

class Header extends Component {
  render() {
    const userLoggedIn = AuthenticationService.isUserLoggedIn();
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <ul className="navbar-nav">
              {userLoggedIn && (
                <li>
                  <Link className="nav-link" to="/welcome/jarvis">
                    HOME
                  </Link>
                </li>
              )}
              {userLoggedIn && (
                <li>
                  <Link className="nav-link" to="/todos">
                    Todos
                  </Link>
                </li>
              )}
            </ul>
            <ul className="navbar-nav navbar-collapse justify-content-end">
              {!userLoggedIn && (
                <li>
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              )}
              {userLoggedIn && (
                <li>
                  <Link
                    className="nav-link"
                    to="/logout"
                    onClick={AuthenticationService.successLogout}
                  >
                    Logout
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}
export default Header;
