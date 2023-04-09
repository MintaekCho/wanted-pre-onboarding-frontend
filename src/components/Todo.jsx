import React from "react";
import { useContext } from "react";
import { TodoContext } from "../context/TodoApiContext";

export default function ({ todo, onDeleteTodo }) {
  const todoApi = useContext(TodoContext);

  return (
    <li className="flex">
      <input type="checkbox" />
      <p>{todo.todo}</p>
      <button>수정</button>
      <button
        onClick={() => {
          todoApi.deleteTodo(todo.id);
          onDeleteTodo(todo.id);
        }}
      >
        삭제
      </button>
    </li>
  );
}
