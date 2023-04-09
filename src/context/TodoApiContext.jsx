import React from "react";
import { createContext } from "react";
import Todo from "../api/todo";

export const TodoContext = createContext();

export default function TodoApiContext({ children }) {
  const todo = new Todo();

  return <TodoContext.Provider value={todo}>{children}</TodoContext.Provider>;
}
