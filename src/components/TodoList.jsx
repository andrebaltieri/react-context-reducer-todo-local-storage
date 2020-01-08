import React, { useCallback, useContext, useEffect } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import RemoveTodo from './RemoveTodo';

const TodoList = () => {
    const { todos, dispatch } = useContext(TodoContext);

    const loadTodos = useCallback(() => {
        dispatch({ type: "LOAD_LOCAL", });
    }, [dispatch]);

    useEffect(() => {
        loadTodos();
    }, [loadTodos]);

    const todoItems = todos.map(todo => (
        <div key={todo.id}>
            <RemoveTodo todo={todo}></RemoveTodo>
            {todo.title}
        </div>
    ));

    return (
        todos.length > 0 ? todoItems : <div>Você não tem nenhuma tarefa hoje!</div>
    );
}

export default TodoList;