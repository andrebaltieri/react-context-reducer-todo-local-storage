import React, { createContext, useReducer } from 'react';
import { reducer } from '../reducers';

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
    const [todos, dispatch] = useReducer(reducer, []);

    return (
        <TodoContext.Provider value={{ todos, dispatch }}>
            {children}
        </TodoContext.Provider>
    );
}

export default TodoProvider;