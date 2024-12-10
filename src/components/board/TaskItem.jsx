import React from 'react';

const TaskItem = ({ task, onDelete }) => {
  return (
    <div className="task-item">
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <button onClick={() => onDelete(task.id)} className="text-red-500">Delete</button>
    </div>
  );
};

export default TaskItem;
