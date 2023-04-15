import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddTodo from "../components/AddTodo";
import Todo from "../components/Todo";
import { TodoContext } from "../context/TodoApiContext";
import { useFetch } from "../hooks/useFetch";

export default function TodoList() {
  const { data, setData } = useFetch("/todos");

  const todoApi = useContext(TodoContext);

  const navigate = useNavigate();

  const handleAddTodo = (newTodo) =>  {
    setData([...data, newTodo]);
  };

  const handleDeleteTodo = (id) => {
    setData([...data].filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    !localStorage.getItem("token") && navigate("/signin");
  });

  // TODO: Todo CRUD 구현하기
  return (
    <section className="w-3/5 min-w-[550px] max-w-[750px] h-4/5  min-h-[500px] max-h-[850px] flex items-center justify-center flex-col bg-slate-800 mt-10 rounded-2xl">
      <ul className="text-white w-4/5 h-4/5 p-4 mb-4 overflow-auto">
        {data &&
          data.map((todo) => (
            <Todo
              key={todo.id}
              todos={data}
              todo={todo}
              onSetTodo={setData}
              onDeleteTodo={handleDeleteTodo}
            />
          ))}
      </ul>
      <AddTodo onAddTodo={handleAddTodo} />
    </section>
  );
}
