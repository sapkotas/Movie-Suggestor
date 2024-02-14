import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MoviePage = () => {
  // Define state for movies and a function to update it
  const [movies, setMovies] = useState([]); // State to store movie data

  // State for handling errors
  const [isError, setIsError] = useState(false); // State to indicate if there's an error
  const [errorText, setErrorText] = useState("");
  const [searchMovies, setSearchMovies] = useState("");
  const [searchError, setSearchError] = useState(false);

  const [loading, setLoading] = useState(false);
  useEffect(() => {}, []);

  useEffect(() => {
    const fetchTimer = setTimeout(() => {
      if (searchMovies && searchMovies.length > 2) {
        fetchMovies(); // Fetch movies after a delay when searchMovies changes
      } else if (searchMovies.length < 1) {
        fetchMovies();
      } else {
        setSearchError("Please enter at least 3 letters.");
      }
    }, 1000);

    return () => {
      clearTimeout(fetchTimer); // Clear the timeout on component unmount
    };
    fetchMovies(); // Fetch movies initially when component mounts
  }, [searchMovies]);

  // Function to fetch movies data from API
  const fetchMovies = async () => {
    setSearchError("");
    try {
      const response = await axios.get(
        // Make a GET request to API
        `https://api.dynoacademy.com/test-api/v1/movies?search=${searchMovies}`
      );
      setMovies(response.data.moviesData); // Update movies state with data from API
      setIsError(false); // Reset error state
      setLoading(false);
    } catch (error) {
      setIsError(true); // Set error state to true if an error occurs
      setErrorText(
        "Error in the page. Cannot get information about the movies."
      );
      setLoading(true);
    }
  };

  return (
    <>
      <div className="App">
        <div>
          <Link to="/add">Add Movies</Link>
        </div>
        <b> Suggested Movies </b>
        <div>
          <input
            type="text"
            placeholder="search movies here"
            value={searchMovies}
            onChange={(e) => setSearchMovies(e.target.value)} // Update searchMovies state on input change
          />
        </div>
        <span style={{ color: "red" }}>{searchError}</span>
<div></div>
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
              <div> {loading ? <> Loading ....</> : <></>}</div>

              {!loading && movies.length < 1 ? (
                <>No movies found!</>
              ) : (
                <>
                  {" "}
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
                      />
                      <br />
                      <b>Information:</b>
                      {el.info} {/* Display movie information */}
                      <br />
                      <b>Rating:</b> {el.rating} {/* Display movie rating */}
                      <br />
                      <br />
                    </div>
                  ))}
                </>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MoviePage;
