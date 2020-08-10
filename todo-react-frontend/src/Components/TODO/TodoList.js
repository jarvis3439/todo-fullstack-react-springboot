import React, { Component } from "react";
import TodoService from "../../todo-api/TodoService";
import moment from "moment";
class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      deleteMessage: null,
    };
  }
  componentDidMount() {
    this.refreshTodos();
  }
  refreshTodos = () => {
    let username = sessionStorage.getItem("authenticatedUser");
    TodoService.getAllTodos(username).then((response) => {
      console.log(response);
      this.setState({
        todos: response.data,
      });
    });
  };

  onDeleteTodos = (id) => {
    let user = sessionStorage.getItem("authenticatedUser");
    TodoService.deleteTodoById(user, id).then((response) => {
      this.setState({
        deleteMessage: `Delete of ${id} Todo is successfull`,
      });

      this.refreshTodos();
    });
  };

  onUpdateTodos = (id) => {
    console.log("Update Todo : " + id);
    this.props.history.push(`/updateTodo/${id}`);
    // let user = sessionStorage.getItem("authenticatedUser");
    // TodoService.deleteTodoById(user, id).then((response) => {
    //   this.setState({
    //     deleteMessage: `Delete of ${id} Todo is successfull`,
    //   });

    //   this.refreshTodos();
    // });
  };

  createTodo = () => {
    console.log("create todo");
    this.props.history.push("/updateTodo/-1");
  };
  render() {
    return (
      <div>
        <div className="container">
          <h1>Todos List</h1>
        </div>
        {this.state.deleteMessage && (
          <div className="alert alert-success">{this.state.deleteMessage} </div>
        )}
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Description</th>
                <th>Target Date</th>
                <th>Completed ?</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todos.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.description}</td>
                  <td>{moment(todo.targetDate).format("YYYY-MM-DD")}</td>
                  <td>{todo.completed.toString()}</td>
                  <td>
                    <button
                      className="btn btn-success"
                      onClick={() => this.onUpdateTodos(todo.id)}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => this.onDeleteTodos(todo.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="row">
            <button className="btn btn-success" onClick={this.createTodo}>
              Add New Todo
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default TodoList;
