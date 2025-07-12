import React, { useState } from 'react'

const TodoList = () => {

    const [todoList, setTodoList] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const addTask = (e) => {
        e.preventDefault();

        if (inputValue.trim()) {
            setTodoList([...todoList, inputValue]);
            setInputValue('');
        }

    }

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

  return (
    <div>

    <form onSubmit={addTask}>
        <input type="text" value={inputValue} onChange={handleChange} placeholder='Add a new task' />
        <button type='submit'>Submit</button>
    </form>

    <ul>
        {
            todoList.map((todo, index) => (
                <li key={index}>{todo}</li>
            ))
        }
    </ul>


    </div>
  )
}

export default TodoList