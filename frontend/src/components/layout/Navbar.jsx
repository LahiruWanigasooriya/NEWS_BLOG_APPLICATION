import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
//import { RxHamburgerMenu } from "react-icons/rx";
import { Context } from "../../main";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

//import axios from "axios";
//import toast from "react-hot-toast";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleNavbar = () => {
    setShow(!show);
  };

  const isDashboard = useLocation("http://localhost:5173/dashboard");

  const { mode, setMode, isAuthenticated, user, setIsAuthenticated } = useContext(Context);

  const navigateTo = useNavigate();

  return (
    <section
      className={
        isDashboard.pathname === "/dashboard"
          ? "hideNavbar"
          : mode === "light"
            ? "header light-navbar"
            : "header dark-navbar"
      }
    >
      <nav>
        <div className="logo">
          Zeta<span>Blog</span>
        </div>
        <div className={show ? "links show" : "links"}>
          <ul>
            <li>
              <Link to={"/"} onClick={handleNavbar}>
                HOME
              </Link>
            </li>
            <li>
              <Link to={"/blogs"} onClick={handleNavbar}>
                BLOGS
              </Link>
            </li>
            <li>
              <Link to={"/authors"} onClick={handleNavbar}>
                ALL AUTHORS
              </Link>
            </li>
            <li>
              <Link to={"/about"} onClick={handleNavbar}>
                ABOUT
              </Link>
            </li>
          </ul>
          <div className="btns">
            <button
              onClick={() =>
                mode === "light" ? setMode("dark") : setMode("light")
              }
              className={
                mode === "light" ? "mode-btn light-mode" : "mode-btn dark-mode"
              }
            >
              {mode === "light" ? (
                <CiLight className="light-icon" />
              ) : (
                <MdDarkMode className="dark-icon" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
