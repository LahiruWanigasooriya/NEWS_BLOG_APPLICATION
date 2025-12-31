import React, { useContext } from "react";
import { Link, useLocation, } from "react-router-dom";
import { AiFillInstagram, AiFillYoutube, AiFillLinkedin } from "react-icons/ai";
import { FaGitSquare } from "react-icons/fa";
import { Context } from "../../main";

const Footer = () => {
  const isDashboard = useLocation("https://news-blog-backend-sooty.vercel.app/dashboard");
  const { mode, setMode } = useContext(Context);

  return (
    <footer
      className={
        isDashboard.pathname === "/dashboard"
          ? "hideFooter"
          : mode === "light"
            ? "light-footer"
            : "dark-footer"
      }
    >
      <div className="container">
        <div className="about">
          <h3>About</h3>
          <p>
          NewsSnap is your go-to platform for quick, real-time news updates from around the world. Stay informed with bite-sized articles on the latest headlines, trending stories, and important events across various categories like politics, sports, technology, and entertainment.        </p>
          <p>
            <span>Email:</span>newssnap@gmail.com
          </p>
          <p>
            <span>Phone:</span>0111157220
          </p>
        </div>
        <div className="quick_links">
          <h3>Quick Links</h3>
          <ul>
            <Link to={"/"}>Home</Link>
            <Link to={"/blogs"}>Blogs</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/dashboard"}>Dashboard</Link>
          </ul>
        </div>
        <div className="categories">
          <h3>Categories</h3>
          <ul>
            <li>Lifestyle</li>
            <li>Technology</li>
            <li>Sports</li>
            <li>Travel</li>
            <li>Business</li>
            <li>Economy</li>
          </ul>
        </div>
        <div className="news_letter">
          <div>
            <h3>Weekly Newletter</h3>
            <p>Get blog articles and offer via email</p>
          </div>
          <div>
            <input type="text" placeholder={`Your Email`} />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="logo">News <span>SNAP</span></div>
        <div className="links">
          <Link to={"/"} target="_blank">
            <AiFillInstagram />
          </Link>
          <Link to={"/"} target="_blank">
            <FaGitSquare />
          </Link>
          <Link to={"https://www.youtube.com/@Dinamina_online"} target="_blank">
            <AiFillYoutube />
          </Link>
          <Link to={"/"} target="_blank">
            <AiFillLinkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
