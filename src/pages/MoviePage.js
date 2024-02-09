import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ViewMovie from "./ViewMovie";

const MoviePage = () => {
  // Define state for movies and a function to update it
  const [movies, setMovies] = useState([]);

  // State for handling errors
  const [isError, setIsError] = useState(false);
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    fetchMovies();
  }, []);
  // Function to fetch movies data from API
  const fetchMovies = async () => {
    console.log("Fetching movies");
    try {
      // Make API call to get movies data
      const response = await axios.get(
        "https://api.dynoacademy.com/test-api/v1/movies"
      );
      // Update movies state with data from API response
      setMovies(response.data.moviesData);
      setIsError(false);
    } catch (error) {
      // Handle errors
      setIsError(true);
      setErrorText(
        "Error in the page. Cannot get information about the movies."
      );
    }
  };

  return (
    <>
      <div className="App">
        <b> Suggested Movies </b>
        {/* <button onClick={fetchMovies}>Get All movies</button>
        <br /> */}
        {/* Conditional rendering based on error state 
        yesari pani if else jastai conditional lagauna milxa*/}
        {isError ? (
          <>
            {/* Display error message */}
            <div
              style={{
                background: "red",
                color: "white",
                padding: "10px",
                margin: "10px",
              }}
            >
              {errorText}{" "}
              {/*this displays the errorText.Check in the setErrorText */}
            </div>
          </>
        ) : (
          <>
            {/* Render movies if there's no error */}
            <div
              style={{ background: "#e7e7e7", padding: "10px", margin: "10px" }}
            >
              {/* Render the list of movies */}
              {movies.map((el) => (
                <div key={el.id}>
                  {/*Key chai unique id ho.error kam garxa vanum na page ma  */}
                  {/* Movie details */}
                  <Link to={`/view_movie/${el.id}`}>
                    <b>{el.name}</b> <br />
                  </Link>
                  <img
                    src={el.image}
                    style={{ height: "200px" }}
                    alt="Error404"
                  ></img>
                  <br />
                  <b>Information:</b>
                  {el.info}
                  <br />
                  <b>Rating:</b> {el.rating}
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
