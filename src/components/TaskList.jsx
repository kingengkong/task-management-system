import { useSelector } from 'react-redux';
import TaskCard from './TaskCard';
import { Droppable } from 'react-beautiful-dnd';

const TaskList = ({ status, onEdit }) => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const filteredTasks = tasks.filter((task) => task.status === status);

  return (
    <Droppable droppableId={status}>
      {(provided) => (
        <div
          className="p-4 bg-gray-50 rounded-lg shadow-md min-h-[200px]"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <h2 className="text-xl font-semibold mb-4">{status}</h2>
          {filteredTasks.length === 0 ? (
            <p className="text-sm text-gray-500 italic">
              No tasks in {status}
            </p>
          ) : (
            filteredTasks.map((task, index) => (
              <TaskCard
                key={task.id}
                task={task}
                onEdit={onEdit}
                index={index}
              />
            ))
          )}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TaskList;
