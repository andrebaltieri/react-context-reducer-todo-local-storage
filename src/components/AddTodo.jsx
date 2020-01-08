import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const AddTodo = () => {
    const { todos, dispatch } = useContext(TodoContext);

    const handleFormSubmit = e => {
        const input = document.getElementById('todo');
        e.preventDefault();
        if (!input.value || input.value === '')
            return;

        const todo = { id: todos.length + 1, title: input.value, done: false };
        dispatch({ type: "ADD_TODO", todo });
        dispatch({ type: "SAVE_LOCAL", });

        input.value = '';
        input.focus();
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" name="todo" id="todo" placeholder="Nova tarefa..." />
            <button>SALVAR</button>
        </form>
    );
}

export default AddTodo;