import React, { Component } from "react";
import { Link } from "react-router-dom";
import HelloWorldService from "../../todo-api/HelloWorldService";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      welcomeMessage: "",
    };
  }

  handleWelcomeMessage(response) {
    this.setState({
      welcomeMessage: response.data.message,
    });
  }

  handleErrorMessage(error) {
    console.log(error.response.data.message);
  }
  render() {
    return (
      <div>
        <h1>Todo Management Application </h1>
        <div className="container">
          Welcome {this.props.match.params.name}. Click here to manage your{" "}
          <Link to="/todos">
            <u>Todos</u>
          </Link>
          .
        </div>
        <button
          onClick={() => {
            HelloWorldService.executeHelloWorldService().then((response) =>
              this.handleWelcomeMessage(response)
            );
          }}
        >
          Excecute Hello World
        </button>
        <button
          onClick={() => {
            HelloWorldService.executeHelloWorldBeanService()
              .then((response) => this.handleWelcomeMessage(response))
              .catch((error) => this.handleErrorMessage(error));
          }}
        >
          Excecute Hello World Bean
        </button>
        <button
          onClick={() => {
            HelloWorldService.executeHelloWorldPathService(
              this.props.match.params.name
            ).then((response) => this.handleWelcomeMessage(response));
          }}
        >
          Excecute Hello World Path
        </button>
        <div className="container">{this.state.welcomeMessage}</div>
      </div>
    );
  }
}
export default Welcome;
