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
    todoApi.createTodo(text)
    .then((res) => {
        console.log(res);
        onAddTodo(res.data)
    });
    setText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="add Todo"
        onChange={handleChange}
        value={text}
      />
      <button>ADD</button>
    </form>
  );
}
