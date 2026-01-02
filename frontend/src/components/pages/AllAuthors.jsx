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
        console.log("Authors fetched:", data); // Debugging log
        setAuthors(data.authors);
      } catch (error) {
        console.error("Error fetching authors:", error); // Debugging log
        setError(error.response?.data?.message || "Failed to fetch authors");
      } finally {
        setLoading(false);
      }
    };
    fetchAuthors();
  }, []);

  return (
    <article
      className={
        mode === "dark"
          ? "dark-bg all-authors-page"
          : "light-bg all-authors-page"
      }
    >
      <div className="authors-header">
        <h2>Meet Our Writers</h2>
      </div>

      <div className="container authors-grid">
        {loading ? (
          <div className="loader-container">
            <BeatLoader color={mode === "dark" ? "#fff" : "gray"} size={30} />
          </div>
        ) : error ? (
          <p className="error">{error}</p>
        ) : authors && authors.length > 0 ? (
          authors.map((element) => (
            <div
              className={`author-card ${
                mode === "dark" ? "dark-card" : "light-card"
              }`}
              key={element._id}
            >
              <div className="image-wrapper">
                <img
                  src={element.avatar?.url || "/default-avatar.png"}
                  alt={element.name}
                />
              </div>
              <div className="card-content">
                <h3>{element.name}</h3>
                <span className="role-badge">{element.role}</span>
              </div>
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
