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
    <section>
      <ul>{todos && todos.map((todo) => <Todo todo={todo} onDeleteTodo={handleDeleteTodo}/>)}</ul>
      <AddTodo onAddTodo={handleAddTodo}/>
    </section>
  );
}
