import React, { useState } from "react";
import { useContext } from "react";
import { TodoContext } from "../context/TodoApiContext";
import { BsFillEraserFill, BsPencil } from "react-icons/bs";

export default function ({todos, todo, onSetTodo, onDeleteTodo }) {
  const todoApi = useContext(TodoContext);
  const [isComplete, setIsComplete] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [updateValue, setUpdateValue] = useState("");

  return (
    <li className="flex justify-between text-xl mt-2 font-bold">
      <div className="flex w-4/5 items-center">
        <input
          checked={isComplete}
          onChange={() => setIsComplete(!isComplete)}
          className="w-6 h-6"
          type="checkbox"
        />
        {isEditMode ? (
          <p className="w-full h-full ml-4">{todo.todo}</p>
        ) : (
          <div className="flex w-full">
            <input
              type="text"
              className="w-[90%] h-10 text-black ml-4 p-1 rounded-l-xl"
              placeholder="update Todo"
              onChange={(e) => setUpdateValue(e.target.value)}
              value={updateValue}
            />
            <button
              onClick={() => onSetTodo([...todos].map(el => {
                if(el.id === todo.id) return el.todo = updateValue
        }))}
              className="w-[10%] min-w-[40px] h-10 rounded-r-xl text-xs bg-orange-700 p-2"
            >
              확인
            </button>
          </div>
        )}
      </div>
      <div className="flex justify-end items-center">
        <button
          onClick={() => setIsEditMode(!isEditMode)}
          className="w-8 h-8 mr-2 rounded-full bg-white text-black flex items-center justify-center"
        >
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
