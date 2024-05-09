import { configureStore } from "@reduxjs/toolkit"
import TodoReducer from "./feacturs/TodoSlice"

export const store = configureStore({
    reducer: TodoReducer,
})

