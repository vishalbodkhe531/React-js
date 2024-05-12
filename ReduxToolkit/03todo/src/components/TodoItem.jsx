import {useDispatch} from "react-redux"
import { removeTodo, toggleTodo, updateTodo } from "../app/features/TodoSlice";
import { useState } from "react";
function TodoItem({ todo }) {

  const [isTodoEditable, setIsTodoEditable] = useState("");
  const [todoMsg, setTodoMsg] = useState(todo.todo)
  
  const dispatch = useDispatch();

  const editTodo = () => {
    // if (isTodoEditable) {
    //   if (todoMsg !== "") {
    //     dispatch(updateTodo({ id: todo.id, todo: todo }));
    //     setIsTodoEditable(false);
    //   } else {
    //     alert("Write Something");
    //   }
    // } else {
    //   setIsTodoEditable(true);
    // }
    dispatch(updateTodo({ id: todo.id, todo: todo, ...todo }))
    setIsTodoEditable(false);
  }

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black bg-[#ccbed7]`}
      //   todo.completed ? "bg-[#c6e9a7]" :
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo(todo.id))}
      />
      <input
        type="text"
        value={todoMsg}
        readOnly={!isTodoEditable}
        onChange={(e) => setTodoMsg(e.target.value)}
        className={`border outline-none w-full bg-transparent rounded-lg border-transparent`}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.complete) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.complete}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => dispatch(removeTodo(todo.id))}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
