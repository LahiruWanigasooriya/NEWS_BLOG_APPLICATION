import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client'; // Import the new method from 'react-dom/client'
import App from './App.jsx';

export const Context = createContext({
  isAuthenticated: false,
  setIsAuthenticated: () => { },
  user: {},
  setUser: () => { },
  blogs: [],
  setBlogs: () => { },
  mode: 'dark',
  setMode: () => { },
});

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const [blogs, setBlogs] = useState([]);
  const [mode, setMode] = useState('dark'); // Initialize mode to 'dark'

  return (
    <Context.Provider
      value={{
        user,
        setUser,
        blogs,
        setBlogs,
        mode,
        setMode,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      <App />
    </Context.Provider>
  );
};

// Use createRoot instead of ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
