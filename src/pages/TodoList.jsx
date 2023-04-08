import React from 'react';
import { useState } from 'react';
import AddTodo from '../components/AddTodo';
import Todo from '../components/Todo';

export default function TodoList() {
    const [todos, setTodo] = useState([]);

    // TODO: Todo CRUD 구현하기
    return (
        <div>
            <section>
               {todos && todos.map((todo) => (
                <Todo todo={todo} />
               ))}
            </section>
            <AddTodo todo={todos} onAdd={setTodo}/>
        </div>
    );
}

