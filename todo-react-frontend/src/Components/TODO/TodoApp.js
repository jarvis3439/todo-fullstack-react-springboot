import React, { Component } from "react";
import Login from "./Login";
import Welcome from "./Welcome";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import TodoList from "./TodoList";
import Footer from "./Footer";
import Logout from "./Logout";
import HeaderComponent from "./HeaderComponent";
import AuthenticatedRoute from "../Security/AuthenticatedRoute";

class TodoApp extends Component {
  render() {
    return (
      <Router>
        <div className="TodoApp">
          <HeaderComponent />
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" component={Login} />
            <AuthenticatedRoute path="/welcome/:name" component={Welcome} />
            <AuthenticatedRoute path="/todos" component={TodoList} />
            <AuthenticatedRoute path="/logout" component={Logout} />
            <Route component={ErrorPage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
export default TodoApp;
