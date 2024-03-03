import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewMovie = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    const getSingleMovieInfo = async () => {
      try {
        const response = await axios.get(
          `https://api.dynoacademy.com/test-api/v1/movie/${id}`
        );
        console.log("Response:", response); // Logging the response
        setMovieDetails(response.data.singleMovieData);
      } catch (error) {
        console.error("Error fetching movie details:", error); // Logging the error
        alert("Error found in the page");
      }
    };

    getSingleMovieInfo(); // Call the function directly inside useEffect
  }, [id]); // Include id as a dependency

  return (
    <>
      <b> Movie Details : </b> <br />
      Movie Name :{movieDetails.name} <br /> <br />
      Info :{movieDetails.info};<br /> <br />
      Description:{movieDetails.desc}
      <br /> <br />
      Image:
      <img
        src={movieDetails.image}
        style={{ height: "200px" }}
        alt="Imageisloading..."
      ></img>{" "}
      <br /> <br />
      Rating: {movieDetails.rating}
      <br />
      <br />
    </>
  );
};
export default ViewMovie;
sunav