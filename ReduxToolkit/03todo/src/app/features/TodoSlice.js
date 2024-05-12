import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos : [{id : nanoid(),complete : false, todo : "1St Todo MSG"}]
}

const TodoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state,action) => { 
            const Todo = { id: nanoid(), complete: false, todo: action.payload };
            // state.todos = state.todos.map((todo) => {todo.action.payload})
           state.todos.push(Todo);
        },
        toggleTodo: (state, action) => { 
            state.todos = state.todos.map((todo) => todo.id === action.payload ? { ...todo, complete: !todo.complete } : todo)
           state.todos.map((todo) =>  todo.id === action.payload ? console.log(todo.complete) : todo);
        },
        removeTodo: (state,action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
         },
        updateTodo: (state, action) => { 
            state.todos = state.todos.map((todoItem) =>
              todoItem.id === action.payload.id
                ? { ...todoItem, todo: action.payload.todo }
                : todoItem
            );
        },
    }
})

export const { addTodo, toggleTodo, removeTodo, updateTodo } = TodoSlice.actions;

export default TodoSlice.reducer