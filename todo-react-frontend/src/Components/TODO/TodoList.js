import React, { Component } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 1,
          description: "Complete Task",
          targetDate: new Date(),
          completed: false,
        },
        {
          id: 2,
          description: "Go to Gym",
          targetDate: new Date(),
          completed: false,
        },
        {
          id: 3,
          description: "Be SelfConfident",
          targetDate: new Date(),
          completed: false,
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <h1>Todos List</h1>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Description</th>
                <th>Target Date</th>
                <th>Completed ?</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todos.map((todo) => (
                <tr>
                  <td>{todo.description}</td>
                  <td>{todo.targetDate.toString()}</td>
                  <td>{todo.completed.toString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default TodoList;
