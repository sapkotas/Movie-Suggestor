import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ViewMovie from "./ViewMovie";

const MoviePage = () => {
  // Define state for movies and a function to update it
  const [movies, setMovies] = useState([]); // State to store movie data

  // State for handling errors
  const [isError, setIsError] = useState(false); // State to indicate if there's an error
  const [errorText, setErrorText] = useState("");
  const [searchMovies, setSearchMovies] = useState("");

  

  useEffect(() => {
    const fetchTimer = setTimeout(() => {
      fetchMovies(); // Fetch movies after a delay when searchMovies changes
    }, 1000);

    return () => {
      clearTimeout(fetchTimer); // Clear the timeout on component unmount
    };
    fetchMovies(); // Fetch movies initially when component mounts
  }, [searchMovies]);




  // Function to fetch movies data from API
  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        // Make a GET request to API
        `https://api.dynoacademy.com/test-api/v1/movies?search=${searchMovies}`
      );
      setMovies(response.data.moviesData); // Update movies state with data from API
      setIsError(false); // Reset error state
    } catch (error) {
      setIsError(true); // Set error state to true if an error occurs
      setErrorText(
        "Error in the page. Cannot get information about the movies."
      );
    }
  };

  return (
    <>
      <div className="App">
        <b> Suggested Movies </b>
        <div>
          <input
            type="text"
            placeholder="search movies here"
            value={searchMovies}
            onChange={(e) => setSearchMovies(e.target.value)} // Update searchMovies state on input change
          />
        </div>
        {isError ? (
          <>
            <div
              style={{
                background: "red",
                color: "white",
                padding: "10px",
                margin: "10px",
              }}
            >
              {errorText} {/* Display error message */}
            </div>
          </>
        ) : (
          <>
            <div
              style={{ background: "#e7e7e7", padding: "10px", margin: "10px" }}
            >
              {movies.map((el) => (
                <div key={el.id}>
                  <Link to={`/view_movie/${el.id}`}>
                    {" "}
                    {/* Link to detailed view of movie */}
                    <b>{el.name}</b> <br />
                  </Link>
                  <img
                    src={el.image}
                    style={{ height: "200px" }}
                    alt="Error404"
                  ></img>
                  <br />
                  <b>Information:</b>
                  {el.info} {/* Display movie information */}
                  <br />
                  <b>Rating:</b> {el.rating} {/* Display movie rating */}
                  <br />
                  <br />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MoviePage;
