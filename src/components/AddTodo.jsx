import React from 'react';
import { useState } from 'react';

export default function AddTodo({todos, onAdd}) {

    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(todos) onAdd([...todos, text]);
        else onAdd([text])
        setText('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='add Todo' onChange={handleChange} value={text}/>
            <button>ADD</button>
        </form>
    );
}

