import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../main";
import PopularAuthors from "../miniComponents/PopularAuthors";
import axios from "axios";
import { BeatLoader } from "react-spinners";

const AllAuthors = () => {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { mode } = useContext(Context);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/user/authors",
          { withCredentials: true }
        );
        console.log('Authors fetched:', data); // Debugging log
        setAuthors(data.authors);
      } catch (error) {
        console.error('Error fetching authors:', error); // Debugging log
        setError(error.response?.data?.message || "Failed to fetch authors");
      } finally {
        setLoading(false);
      }
    };
    fetchAuthors();
  }, []);

  return (
    <article className={mode === "dark" ? "dark-bg all-authors" : "light-bg all-authors"}>
      <h2>ALL AUTHORS</h2>
      <div className="container">
        {loading ? (
          <BeatLoader color="gray" size={50} style={{ padding: "200px 0" }} />
        ) : error ? (
          <p>{error}</p>
        ) : authors && authors.length > 0 ? (
          authors.map((element) => (
            <div className="card" key={element._id}>
              <img
                src={element.avatar?.url || 'default-avatar-url.png'} // Check if avatar exists
                alt="author_avatar"
              />
              <h3>{element.name}</h3>
              <p>{element.role}</p>
            </div>
          ))
        ) : (
          <p>No authors found</p>
        )}
      </div>
    </article>
  );
};

export default AllAuthors;
