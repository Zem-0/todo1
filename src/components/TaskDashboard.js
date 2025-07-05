import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import FilterTabs from './FilterTabs';
import ThemeToggle from './ThemeToggle';

const TASKS_KEY = 'tasks';

const getInitialTasks = () => {
  const saved = localStorage.getItem(TASKS_KEY);
  return saved ? JSON.parse(saved) : [];
};

const TaskDashboard = ({ onLogout, isDark, onToggleTheme }) => {
  const [tasks, setTasks] = useState(getInitialTasks);
  const [filter, setFilter] = useState('all');
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([
      ...tasks,
      { ...task, id: Date.now(), completed: false, createdAt: new Date().toISOString() },
    ]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
    setEditingTask(null);
  };

  const deleteTask = (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTasks(tasks.filter((t) => t.id !== id));
    }
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const filteredTasks =
    filter === 'all'
      ? tasks
      : tasks.filter((t) => (filter === 'completed' ? t.completed : !t.completed));

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Task Dashboard</h2>
        <div className="header-actions">
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          <button onClick={onLogout}>Logout</button>
        </div>
      </div>
      <TaskForm onAdd={addTask} editingTask={editingTask} onUpdate={updateTask} />
      <FilterTabs
        filter={filter}
        setFilter={setFilter}
        tasks={tasks}
      />
      <TaskList
        tasks={filteredTasks}
        onEdit={setEditingTask}
        onDelete={deleteTask}
        onToggle={toggleComplete}
      />
    </div>
  );
};

export default TaskDashboard; 