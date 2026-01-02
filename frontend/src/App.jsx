import React, { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blogs from "./components/pages/Blogs";
import SingleBlog from "./components/pages/SingleBlog";
import Dashboard from "./components/pages/Dashboard";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import AllAuthors from "./components/pages/AllAuthors";
import UpdateBlog from "./components/pages/UpdateBlog";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { Context } from "./main";
import axios from "axios";
import { Toaster } from "react-hot-toast";

const App = () => {
  const { setUser, setIsAuthenticated, setBlogs, isAuthorized } =
    useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // CORRECT URL: Must include /user/ because of App.js
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/myprofile",
          { withCredentials: true }
        );

        setUser(response.data.user);
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
        localStorage.removeItem("isAuthenticated"); 
        localStorage.removeItem("user");
      }
    };

    fetchUser();
  }, [setIsAuthenticated, setUser]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/blog/all",
          { withCredentials: true }
        );
        setBlogs(data.allBlogs);
      } catch (error) {
        setBlogs([]);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
        <Route path="/about" element={<About />} />
        <Route path="/authors" element={<AllAuthors />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blog/update/:id" element={<UpdateBlog />} />
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  );
};

export default App;
