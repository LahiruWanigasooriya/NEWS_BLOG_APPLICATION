import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { Context } from "../../main";

const PopularAuthors = () => {
  const [authors, setAuthors] = useState([]);

  // Fetch authors from the backend API
  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await axios.get(
        "https://news-blog-backend-sooty.vercel.app/api/v1/user/authors",
        { withCredentials: true }
      );
      setAuthors(data.authors); // Set the fetched authors to context
    };
    fetchUser();
  }, []);

  return (
    <section className="popularAuthors">
      <h3>Popular Authors</h3>
      <div className="container">
        {authors && authors.length > 0 ? (
          // Display authors if available
          authors.slice(0, 4).map((element) => {
            return (
              <div className="card" key={element._id} >
                <img src={element.avatar.url} alt="author" />
                <p>{element.name}</p>
                <p>{element.role}</p>
              </div>
            );
          })
        ) : (
          // Display loading spinner while fetching authors
          <BeatLoader size={30} color="gray" />
        )}
      </div>
    </section>
  );
};

export default PopularAuthors;
