import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import TaskDashboard from './components/TaskDashboard';

function App() {
  const [username, setUsername] = useState(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('username');
    if (saved) setUsername(saved);
    
    // Load theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const handleLogin = (name) => {
    setUsername(name);
  };

  const handleLogout = () => {
    // Clear all localStorage data
    localStorage.clear();
    
    // Clear sessionStorage if any
    sessionStorage.clear();
    
    // Reset username state
    setUsername(null);
    
    // Reset theme to default (light)
    setIsDark(false);
    document.documentElement.setAttribute('data-theme', 'light');
  };

  const handleToggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', newTheme ? 'dark' : 'light');
  };

  return (
    <div className="App">
      {username ? (
        <TaskDashboard 
          onLogout={handleLogout} 
          isDark={isDark} 
          onToggleTheme={handleToggleTheme} 
        />
      ) : (
        <Login 
          onLogin={handleLogin} 
          isDark={isDark} 
          onToggleTheme={handleToggleTheme} 
        />
      )}
    </div>
  );
}

export default App;
