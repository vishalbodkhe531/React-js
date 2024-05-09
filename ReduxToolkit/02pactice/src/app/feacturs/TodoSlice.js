import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: nanoid(),
      complete: false,
      todo: "1st message",
    },
    {
      id: nanoid(),
      complete: false,
      todo: "2nd message",
    },
  ],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        complete: false,
        todo: action.payload,
      };
      state.todos.push(todo);
    },
    // removeTodo: () => {},
    // toggleTodo: () => {},
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
