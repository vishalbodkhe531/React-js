import { useDispatch } from "react-redux";
import { removeTodo, toggleComplete } from "../app/features/todoSlice";
import { useState } from "react";
import { updateTodo } from "../../../03todo/src/app/features/TodoSlice";

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [isTodoEditable, setIsTodoEditable] = useState('');
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const editeTodo = () => {
    if (todo.complete) return;

    if (isTodoEditable) {
      dispatch(updateTodo({ id: todo.id, todo: todo.todo, ...todo }))
      setIsTodoEditable(false);
    } else {
      setIsTodoEditable((prev) => !prev);
    }
  }

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black bg-[#ccbed7]`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        // checked={todo.complete}
        onChange={() => dispatch(toggleComplete(todo.id))}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg border-transparent`}
        value={todoMsg}
        readOnly={!isTodoEditable}
        onChange={(e) => setTodoMsg(e.target.value)}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        // onClick={() => {
        //   if (todo.completed) return;

        //   if (isTodoEditable) {
        //     editTodo();
        //   } else setIsTodoEditable((prev) => !prev);
        // }}
        // disabled={todo.completed}
        onClick={editeTodo}
        disabled={todo.complete}
      >
        {isTodoEditable ? "📁" : "✏️"}
        {/* ✏️ */}
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
