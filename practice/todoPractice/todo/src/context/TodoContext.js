// import { createContext, useContext } from "react"

// export const TodoContext = createContext({
//     todos: [
//         {
//             id: 1,
//             todo: "Todo msg",
//             completed : false
//         }
//     ],
//     addTodo: (todo) => { },
//     updateTodo: (id,todo) => { },
//     deletTodo: (id) => { },
//     toggleTodo: (id) => { },
// })

// export const UseContext = () =>{
//     return useContext(TodoContext);
// }

// export const TodoProvider = TodoContext.Provider

import { createContext, useContext } from "react"

export const TodoContext = createContext({
    todos: [{
        id: 1,
        todo: "Todo Msg",
        completed : false
    }],
    addTodo: (todo) => { },
    updateTodo: (id,todo) => { },
    deleteTodo: (id) => { },
    toggleTodo: (id) => { },
})

export const UseTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider