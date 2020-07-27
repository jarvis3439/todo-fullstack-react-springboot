import React, { Component } from "react";
import Login from "./Login";
import Welcome from "./Welcome";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import TodoList from "./TodoList";
import Header from "./Header";
import Footer from "./Footer";
import Logout from "./Logout";

class TodoApp extends Component {
  render() {
    return (
      <div className="TodoApp">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/welcome/:name" component={Welcome} />
            <Route path="/todos" component={TodoList} />
            <Route path="/logout" component={Logout} />
            <Route component={ErrorPage} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}
export default TodoApp;
