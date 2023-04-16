import React, { useState } from "react";
import { useContext } from "react";
import { TodoContext } from "../context/TodoApiContext";
import { BsFillEraserFill, BsPencil } from "react-icons/bs";

export default function Todo({ todos, todo, onSetTodo, onDeleteTodo }) {
  const todoApi = useContext(TodoContext);
  const [isComplete, setIsComplete] = useState(todo.isCompleted);
  const [isEditMode, setIsEditMode] = useState(false);
  const [updateValue, setUpdateValue] = useState("");

  const handleCheck = async () => {
    await todoApi.updateTodo(todo.id, todo.todo, !isComplete).then((res) => {
      const newTodos = todos.map((todo) =>
        todo.id === res.data.id ? res.data : todo
      );
      onSetTodo(newTodos);
      setIsComplete(!isComplete)
    });
  };

  return (
    <li className="flex justify-between text-xl mt-2 font-bold">
      <div className="flex w-4/5 items-center">
        <input
          checked={isComplete}
          onChange={handleCheck}
          className="w-6 h-6"
          type="checkbox"
        />
        {!isEditMode ? (
          <p className={`w-full h-full ml-4 ${isComplete ? 'line-through text-gray-400' : ''}`}>{todo.todo}</p>
        ) : (
          <form className="flex w-full">
            <input
              type="text"
              className="w-[90%] h-10 text-black ml-4 p-1 rounded-l-xl outline-none"
              placeholder="update Todo"
              onChange={(e) => setUpdateValue(e.target.value)}
              value={updateValue}
            />
            <button
              onClick={() => {
                todoApi
                  .updateTodo(todo.id, updateValue, isComplete)
                  .then((res) => {
                    const newTodos = todos.map((todo) =>
                      todo.id === res.data.id ? res.data : todo
                    );
                    onSetTodo(newTodos);
                  });
                setIsEditMode(false);
              }}
              className="w-[10%] min-w-[40px] h-10 rounded-r-xl text-xs bg-orange-700 p-2"
            >
              확인
            </button>
          </form>
        )}
      </div>
      <div className="flex justify-end items-center">
        <button
          onClick={() => {
            setIsEditMode(!isEditMode);
            setUpdateValue("");
          }}
          className="w-8 h-8 mr-2 rounded-full bg-white text-black flex items-center justify-center"
          data-testid="modify-button"
        >
          <BsPencil />
        </button>
        <button
          className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center"
          onClick={() => {
            todoApi.deleteTodo(todo.id);
            onDeleteTodo(todo.id);
          }}
          data-testid="delete-button"
        >
          <BsFillEraserFill />
        </button>
      </div>
    </li>
  );
}
