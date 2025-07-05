import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const Login = ({ onLogin, isDark, onToggleTheme }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      localStorage.setItem('username', username);
      onLogin(username);
    }
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h2>Login</h2>
        <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login; 