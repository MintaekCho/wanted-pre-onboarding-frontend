import axios from "axios";

axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "token"
)}`;

export default class Todo {
  constructor() {
    this.ACCESS_TOKEN = `Bearer ${localStorage.getItem("token") || ""}`;
    this.httpClient = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
    });
  }

  async createTodo(todo) {
    const todoData = {
      todo: todo,
    };
    return this.httpClient.post("/todos", todoData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async getTodos() {
    return this.httpClient.get("/todos", {});
  }

  async updateTodo(id, todo, isCompleted) {
    const updateTodo = {
      todo: todo,
      isCompleted: isCompleted,
    };

    return this.httpClient.put(`/todos/${id}`, updateTodo, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async deleteTodo(id) {
    await this.httpClient.delete(`/todos/${id}`);
  }
}
