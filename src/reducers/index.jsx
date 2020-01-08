export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO": return [...state, action.todo];
        case "REMOVE_TODO": return [...state.filter((_, i) => i !== action.index)];
        case "LOAD_LOCAL": {
            const data = localStorage.getItem('todos');
            if (!data || data === [])
                return [...state];

            return JSON.parse(data);
        }
        case "SAVE_LOCAL": {
            localStorage.setItem('todos', JSON.stringify(state));
            return [...state];
        }
        default: return [...state];
    }
}