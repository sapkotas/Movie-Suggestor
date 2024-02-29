import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewMovie = () => {
  const getparams = useParams();
  const getId = getparams.id;
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    getSingleMovieInfo();
  }, []);

  const getSingleMovieInfo = async () => {
    try {
      const response = await axios.get(
        `https://api.dynoacademy.com/test-api/v1/movie/${getId}`
      );
      setMovieDetails(response.data.singleMovieData);
    } catch (error) {
      alert("Error found in the page");
    }
  };
  return (
    <>
      {/* This is viewPage {getId}
        <button onClick={getSingleMovieInfo}>This is movie page</button>
        <br /> */}
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
      Rating: {movieDetails.rating}<br></br>
      <br />
      <br />
    </>
  );
};
export default ViewMovie;
