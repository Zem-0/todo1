import React from 'react';

const TaskItem = ({ task, onEdit, onDelete, onToggle }) => {
  const { id, title, description, completed, createdAt } = task;
  return (
    <li className={`task-item${completed ? ' completed' : ''}`}>
      <div className="task-main">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(id)}
        />
        <div className="task-info">
          <div className="task-title">{title}</div>
          {description && <div className="task-desc">{description}</div>}
          <div className="task-date">
            Created: {new Date(createdAt).toLocaleString()}
          </div>
        </div>
      </div>
      <div className="task-actions">
        <button onClick={() => onEdit(task)}>Edit</button>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </li>
  );
};

export default TaskItem; 