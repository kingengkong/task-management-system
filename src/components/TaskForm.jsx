import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from '../features/tasks/tasksSlice';

const TaskForm = ({ taskToEdit, clearEdit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Low');
  const [status, setStatus] = useState('To-Do');
  const dispatch = useDispatch();

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setPriority(taskToEdit.priority);
      setStatus(taskToEdit.status);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskToEdit) {
      dispatch(
        editTask({ id: taskToEdit.id, title, description, priority, status })
      );
      clearEdit();
    } else {
      dispatch(addTask({ id: Date.now(), title, description, priority, status }));
    }

    setTitle('');
    setDescription('');
    setPriority('Low');
    setStatus('To-Do');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white rounded-lg shadow-lg border border-gray-200"
    >
      <div className="mb-4">
        <label className="block text-sm font-bold mb-1">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Task title"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-bold mb-1">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Task description"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-bold mb-1">Priority</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-bold mb-1">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
          >
            <option>To-Do</option>
            <option>In Progress</option>
            <option>Done</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        {taskToEdit ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;
