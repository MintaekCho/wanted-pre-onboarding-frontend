import React, { useContext, useEffect } from "react";
import { useState } from "react";
import AddTodo from "../components/AddTodo";
import Todo from "../components/Todo";
import { TodoContext } from "../context/TodoApiContext";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const todoApi = useContext(TodoContext);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  }

  const handleDeleteTodo = (id) => {
    setTodos([...todos].filter((todo) => todo.id !== id));
  }

  useEffect(() => {
    todoApi.getTodos()
      .then((res) => {
        setTodos([...res.data]);
      })
      .catch(e => console.error(e));
  }, []);

  console.log(todos);


  // TODO: Todo CRUD 구현하기
  return (
    <section className="w-3/5 min-w-[550px] max-w-[750px] h-4/5  min-h-[500px] max-h-[850px] flex items-center justify-center flex-col bg-slate-800 mt-10 rounded-2xl">
      <ul className="text-white w-4/5 h-4/5 p-4 mb-4 overflow-auto">{todos && todos.map((todo) => <Todo todo={todo} onDeleteTodo={handleDeleteTodo}/>)}</ul>
      <AddTodo onAddTodo={handleAddTodo}/>
    </section>
  );
}
