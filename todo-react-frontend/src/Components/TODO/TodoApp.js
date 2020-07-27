import React, { Component } from "react";
import Login from "./Login";
import Welcome from "./Welcome";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ErrorPage from "./ErrorPage";

class TodoApp extends Component {
  render() {
    return (
      <div className="TodoApp">
        <Router>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/welcome/:name" component={Welcome} />
            <Route component={ErrorPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default TodoApp;
