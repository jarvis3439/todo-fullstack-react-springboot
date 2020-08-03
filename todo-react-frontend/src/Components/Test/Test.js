import React, { Component } from "react";

class Test extends Component {
  constructor() {
    super();
    this.state = {
      isValid: " ",
    };
    this.changeState = this.changeState.bind(this);
  }

  changeState() {
    this.setState({
      isValid: true,
    });
    console.log(this.state.isValid);
  }
  render() {
    return (
      <div>
        <button onClick={this.changeState}>Click</button>
      </div>
    );
  }
}
export default Test;
