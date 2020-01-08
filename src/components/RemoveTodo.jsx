import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const RemoveTodo = ({ todo }) => {
    const { todos, dispatch } = useContext(TodoContext);

    const handleButtonClick = () => {
        const index = todos.indexOf(todo);
        dispatch({ type: "REMOVE_TODO", index });
        dispatch({ type: "SAVE_LOCAL", });
    }

    return (
        <button className="button-clear" onClick={handleButtonClick}><i className="fa fa-trash"></i></button>
    );
}

export default RemoveTodo;