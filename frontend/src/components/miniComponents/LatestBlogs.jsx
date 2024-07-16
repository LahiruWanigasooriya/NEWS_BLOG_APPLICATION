import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";

const LatestBlogs = ({ heading, newClass }) => {
  const { blogs } = useContext(Context);

  return (
    <section className={newClass && newClass.length > 0 ? "dashboard-blogs blogs" : "blogs"}>
      <h3>Latest Blogs</h3>
      <div className="container">
        {blogs &&
          blogs.map((element) => (
            <Link to={`/blog/${element._id}`} className="card" key={element._id}>
              <img src={element.mainImage.url} alt="blog" />
              <span className="category">{element.category}</span>
              <h4>{element.title}</h4>
              <div className="writer_section">
                <div className="author">
                  <img src={element.authorAvatar} alt="author_avatar" />
                  <p>{element.authorName}</p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default LatestBlogs;
