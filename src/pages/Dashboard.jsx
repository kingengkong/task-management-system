import { useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { DragDropContext } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { editTask } from '../features/tasks/tasksSlice';

const Dashboard = () => {
  const [taskToEdit, setTaskToEdit] = useState(null);
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleEdit = (task) => setTaskToEdit(task);
  const clearEdit = () => setTaskToEdit(null);

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const task = tasks.find((task) => task.id === parseInt(draggableId));
    if (task) {
      dispatch(
        editTask({
          ...task,
          status: destination.droppableId,
        })
      );
    }
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Task Management Dashboard
      </h1>

      {/* Form */}
      <TaskForm taskToEdit={taskToEdit} clearEdit={clearEdit} />

      {/* Board */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <TaskList status="To-Do" onEdit={handleEdit} />
          <TaskList status="In Progress" onEdit={handleEdit} />
          <TaskList status="Done" onEdit={handleEdit} />
        </div>
      </DragDropContext>
    </div>
  );
};

export default Dashboard;
