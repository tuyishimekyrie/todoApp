/* eslint-disable react/prop-types */
// Todo.js
import  { useState } from "react";
import UpdateTodoPopup from "./UpdateTodoPopup";

const Todo = ({ todo, onDelete, onComplete, onUpdate }) => {
  const [isCompleted, setIsCompleted] = useState(todo?.isCompleted);
  const [showUpdatePopup, setShowUpdatePopup] = useState(false);

  const handleUpdateClick = () => {
    setShowUpdatePopup(true);
  };

  const handleUpdateClose = () => {
    setShowUpdatePopup(false);
  };

  return (
    <div
      className={`w-full flex items-center justify-between p-4 lg:p-6 gap-3 border-b capitalize ${
        todo.isImportant
          ? "text-yellow-200"
          : "text-white dark:bg-gray-800 border dark:border-gray-700"
      }`}
    >
      {/* Move the UpdateTodoPopup component outside the span */}
      {showUpdatePopup && (
        <UpdateTodoPopup
          todo={todo}
          onUpdate={(id, updatedTodo) => {
            onUpdate(id, updatedTodo);
            handleUpdateClose();
          }}
          onCancel={handleUpdateClose}
        />
      )}

      <span
        onClick={() => {
          onComplete(todo.id);
          setIsCompleted((prev) => !prev);
        }}
        className={`w-6 h-6 rounded-full flex items-center justify-center overflow-hidden ${
          isCompleted
            ? "bg-gradient-to-br from-sky-500 to-violet-500"
            : "border dark:border-gray-700"
        }`}
      >
        {isCompleted && (
          <img
            src="./images/icon-check.svg"
            alt=""
            className="w-3 h-3 object-contain"
          />
        )}
      </span>

      <p
        className={`flex-grow text-xs sm:text-base ${
          todo.isImportant
            ? "text-blue-500"
            : "text-gray-800 dark:text-gray-300"
        } ${isCompleted && "line-through opacity-50"}`}
      >
        {todo.todo}
      </p>
      <span className="cursor-pointer" onClick={handleUpdateClick}>
        <button className="bg-blue-600 text-white px-4 py-1 rounded-full hover:bg-blue-800">
          Update
        </button>
      </span>
      <span className="cursor-pointer" onClick={onDelete.bind(null, todo.id)}>
        <button className="bg-gradient-to-br from-red-500 to-pink-500 text-white px-4 py-1 rounded-full hover:bg-gradient-to-bl hover:from-red-600 hover:to-pink-600">
          Delete
        </button>
      </span>
    </div>
  );
};

export default Todo;
