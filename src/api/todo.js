import axios from "axios";

export default class Todo {
  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://www.pre-onboarding-selection-task.shop/",
    });
  }

  ACCESS_TOKEN = `Bearer ${localStorage.getItem("token")}`;
  async createTodo(todo) {
    const todoData = {
      todo: todo,
    };

    return this.httpClient.post("/todos", todoData, {
      headers: {
        Authorization: this.ACCESS_TOKEN,
        "Content-Type": "application/json",
      },
    });
  }

  async getTodos() {
    return this.httpClient.get("/todos", {
      headers: {
        Authorization: this.ACCESS_TOKEN,
      },
    });
  }

  async updateTodo(id, todo, isCompleted) {
    const todoData = {
      todo: todo,
      isCompleted: isCompleted,
    };

    this.httpClient.put(`/todos/${id}`, todoData, {
      headers: {
        Authorization: this.ACCESS_TOKEN,
        "Content-Type": "application/json",
      },
    });
  }

  async deleteTodo(id) {
    this.httpClient.delete(`/todos/${id}`, {
      headers: {
        Authorization: this.ACCESS_TOKEN,
      },
    });
  }
}
