import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client'; 
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
  // 1. Auth State
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("isAuthenticated") === "true";
  });

  // 2. User State
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : {};
  });

  // 3. Blogs State (THIS WAS MISSING)
  const [blogs, setBlogs] = useState([]); 

  // 4. Mode State
  const [mode, setMode] = useState('dark'); 

  return (
    <Context.Provider
      value={{
        user,
        setUser,
        blogs,     // Now this is defined
        setBlogs,  // Now this is defined
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);