import React, { useContext } from "react";
import { useState } from "react";
import { TodoContext } from "../context/TodoApiContext";

export default function AddTodo({ onAddTodo }) {
  const [text, setText] = useState("");
  const todoApi = useContext(TodoContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length !== 0) {
      todoApi.createTodo(text).then((res) => {
        onAddTodo(res.data);
      }).catch(() => alert('Todo 추가를 실패하였습니다.'));
    }
    setText("");
  };
  return (
    <form className="w-4/5" onSubmit={handleSubmit}>
      <input
        className="p-2 w-[85%] h-full rounded-l-2xl outline-none"
        type="text"
        placeholder="add Todo"
        onChange={handleChange}
        value={text}
        data-testid="new-todo-input"
      />
      <button
        className="bg-orange-700 w-[15%] h-full p-2 rounded-r-2xl"
        data-testid="new-todo-add-button"
      >
        ADD
      </button>
    </form>
  );
}
