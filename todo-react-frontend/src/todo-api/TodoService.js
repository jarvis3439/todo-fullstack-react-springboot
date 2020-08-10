import axios from "axios";
class TodoService {
  getAllTodos(user) {
    console.log("Retrieve all todos");
    return axios.get(`http://localhost:8080/users/${user}/todos`);
  }

  getTodo(user, id) {
    console.log("Retrieve specific todo");
    return axios.get(`http://localhost:8080/users/${user}/todos/${id}`);
  }

  deleteTodoById(user, id) {
    console.log("Delete Todo");
    return axios.delete(`http://localhost:8080/users/${user}/todos/${id}`);
  }

  updateTodo(user, id, todo) {
    console.log("Update Todo");
    return axios.put(`http://localhost:8080/users/${user}/todos/${id}`, todo);
  }

  createTodo(user, todo) {
    console.log("Create Todo");
    return axios.post(`http://localhost:8080/users/${user}/todos/`, todo);
  }
}

export default new TodoService();
