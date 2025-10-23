import { useDispatch } from 'react-redux';
import { deleteTask } from '../features/tasks/tasksSlice';
import { Draggable } from 'react-beautiful-dnd';

// Tentukan warna berdasarkan prioritas
const getPriorityColor = (priority) => {
  switch (priority) {
    case 'High':
      return 'bg-red-200 border-red-400';
    case 'Medium':
      return 'bg-yellow-200 border-yellow-400';
    case 'Low':
      return 'bg-green-200 border-green-400';
    default:
      return 'bg-gray-100 border-gray-300';
  }
};

const TaskCard = ({ task, onEdit, index }) => {
  const dispatch = useDispatch();
  const priorityColor = getPriorityColor(task.priority);

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided) => (
        <div
          className={`p-4 ${priorityColor} border rounded-lg shadow-md mb-3 transition hover:shadow-lg`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <h3 className="text-lg font-semibold">{task.title}</h3>
          <p className="text-sm text-gray-700">{task.description}</p>
          <p className="text-xs text-gray-600 mt-2 italic">
            Priority: <span className="font-medium">{task.priority}</span>
          </p>
          <div className="mt-3 flex gap-4">
            <button
              onClick={handleDelete}
              className="text-red-600 text-sm font-medium hover:underline"
            >
              Delete
            </button>
            <button
              onClick={() => onEdit(task)}
              className="text-blue-600 text-sm font-medium hover:underline"
            >
              Edit
            </button>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
