import axios from "axios";
import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { Context } from "../../main"; // Assuming this is the correct path to your Context

const PopularAuthors = () => {
  const { authors, setAuthors } = useContext(Context);

  // Fetch authors from the backend API
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/user/authors",
          { withCredentials: true }
        );
        setAuthors(data.authors); // Set the fetched authors to context
      } catch (error) {
        console.error("Error fetching authors:", error);
      }
    };
    fetchUser();
  }, [setAuthors]);

  return (
    <section className="popularAuthors">
      <h3>Popular Authors</h3>
      <div className="container">
        {authors && authors.length > 0 ? (
          // Display authors if available
          authors.slice(0, 4).map((element) => (
            <Link className="card" key={element._id} to={`/authors/${element._id}`}>
              <img src={element.avatar.url} alt="author" />
              <p>{element.name}</p>
              <p>{element.role}</p>
            </Link>
          ))
        ) : (
          // Display loading spinner while fetching authors
          <BeatLoader size={30} color="gray" />
        )}
      </div>
    </section>
  );
};

export default PopularAuthors;
