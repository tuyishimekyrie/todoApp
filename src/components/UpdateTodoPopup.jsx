/* eslint-disable react/prop-types */
import  { useState } from "react";

const UpdateTodoPopup = ({ todo, onUpdate, onCancel }) => {
  const [updatedTodo, setUpdatedTodo] = useState(todo.todo);

  const handleUpdate = () => {
    onUpdate(todo.id, updatedTodo);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-slate-900 bg-opacity-70">
      <div className="bg-white p-4 rounded-lg">
        <label className="block mb-2 text-slate-800">Update Todo:</label>
        <input
          type="text"
          value={updatedTodo}
          onChange={(e) => setUpdatedTodo(e.target.value)}
          className="w-full border border-slate-500 p-2 mb-2 text-slate-800"
        />
        <div className="flex justify-end">
          <button
            onClick={handleUpdate}
            className="bg-blue-500 hover:bg-blue-900 text-white px-4 py-2 mr-2 rounded"
          >
            Update
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-500 hover:bg-red-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateTodoPopup;
