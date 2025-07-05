import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onEdit, onDelete, onToggle }) => {
  if (tasks.length === 0) {
    return <div className="empty-list">No tasks to show.</div>;
  }
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
};

export default TaskList; 