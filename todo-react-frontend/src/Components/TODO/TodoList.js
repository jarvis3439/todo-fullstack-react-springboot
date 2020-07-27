import React, { Component } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: 1, description: "Complete Task" },
        { id: 2, description: "Go to Gym" },
        { id: 3, description: "Be SelfConfident" },
      ],
    };
  }
  render() {
    return (
      <div>
        <h1>TODO List</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todos.map((todo) => (
              <tr>
                <td>{todo.id}</td>
                <td>{todo.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default TodoList;
