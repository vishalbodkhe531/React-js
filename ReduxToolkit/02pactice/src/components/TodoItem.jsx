// import {useDispatch} from "react-redux"

function TodoItem({ todo }) {
  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black bg-[#ccbed7] bg-slate-200"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        // checked={todo.completed}
        // onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-l px-2 border-transparent `}
        value={todo.todo}
        // onChange={(e) => setTodoMsg(e.target.value)}
        // readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          // if (todo.completed) return;
          // if (isTodoEditable) {
          //   editTodo();
          // } else setIsTodoEditable((prev) => !prev);
        }}
        // disabled={todo.completed}
      >
        {/* {isTodoEditable ? "📁" : ""} */}
        ✏️
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        // onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
