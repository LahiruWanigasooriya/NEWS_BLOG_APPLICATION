import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdDarkMode } from 'react-icons/md';
import { CiLight } from 'react-icons/ci';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Context } from '../../main';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { mode, setMode, isAuthenticated, user, setIsAuthenticated, setUser } = useContext(Context);
  const navigateTo = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log('isAuthenticated:', isAuthenticated);
    console.log('user:', user);
  }, [isAuthenticated, user]);

  const handleNavbar = () => {
    setShow(!show);
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get('http://localhost:4000/api/v1/user/logout', {
        withCredentials: true,
      });
      setIsAuthenticated(false);
      setUser(null); // Reset the user state
      toast.success(data.message);
      navigateTo('/');
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <section className={`header ${location.pathname === '/dashboard' ? 'hideNavbar' : mode === 'light' ? 'light-navbar' : 'dark-navbar'}`}>
      <nav>
        <div className="logo">
          Zeta<span>Blog</span>
        </div>
        <div className={show ? 'links show' : 'links'}>
          <ul>
            <li>
              <Link to="/" onClick={handleNavbar}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="/blogs" onClick={handleNavbar}>
                BLOGS
              </Link>
            </li>
            <li>
              <Link to="/authors" onClick={handleNavbar}>
                ALL AUTHORS
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={handleNavbar}>
                ABOUT
              </Link>
            </li>
          </ul>
          <div className="btns">
            <button
              onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
              className={`mode-btn ${mode === 'light' ? 'light-mode' : 'dark-mode'}`}
            >
              {mode === 'light' ? <CiLight className="light-icon" /> : <MdDarkMode className="dark-icon" />}
            </button>
            {isAuthenticated && user?.role === 'Author' && (
              <Link to="/dashboard" onClick={handleNavbar} className="dashboard-btn">
                DASHBOARD
              </Link>
            )}
            {!isAuthenticated ? (
              <Link to="/login" onClick={handleNavbar} className="login-btn">
                LOGIN
              </Link>
            ) : (
              <button className="logout-btn" onClick={handleLogout}>
                LOGOUT
              </button>
            )}
          </div>
        </div>
        <RxHamburgerMenu className="hamburger" onClick={handleNavbar} />
      </nav>
    </section>
  );
};

export default Navbar;
