import React from "react";
import { useContext } from "react";
import { TodoContext } from "../context/TodoApiContext";
import { BsFillEraserFill, BsPencil } from "react-icons/bs";

export default function ({ todo, onDeleteTodo }) {
  const todoApi = useContext(TodoContext);

  return (
    <li className="flex justify-between text-xl mt-2 font-bold">
      <div className="flex w-3/5 items-center">
        <input className="w-6 h-6" type="checkbox" />
        <p className="w-full ml-4">{todo.todo}</p>
      </div>
      <div className="flex justify-end items-center">
        <button className="w-8 h-8 mr-2 rounded-full bg-white text-black flex items-center justify-center">
            <BsPencil />
        </button>
        <button
        className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center"
          onClick={() => {
            todoApi.deleteTodo(todo.id);
            onDeleteTodo(todo.id);
          }}
        >
          <BsFillEraserFill />
        </button>
      </div>
    </li>
  );
}
