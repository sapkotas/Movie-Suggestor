import axios from "axios";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddMovie = () => {
  const movierefrence = useRef();
  const ratingrefrence = useRef();
  const descrefrence = useRef();

  const navigate = useNavigate();
  const addMovieHandler = async (e) => {
    e.preventDefault();

    const movieData = {
      movie_name: movierefrence.current.value,
      rating: ratingrefrence.current.value,
      description: descrefrence.current.value,
    };

    try {
      const response = await axios.post(
        "https://api.dynoacademy.com/test-api/v1/movies ",
        movieData,
        {
          timeout: 1000,
        }
      );
      alert(response.data.message);
      navigate("/", { replace: true });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.errors[0].message);
      } else {
        alert("Unknown error occured!");
      }
    }
  };
  return (
    <>
      <b>This is Add Movie page</b>
      <br />
      <Link to="/">Home</Link>

      <form onSubmit={addMovieHandler}>
        Movie Name: <br />
        <input type="text" placeholder="Movie Name" ref={movierefrence} />
        <br />
        <br />
        Rating: <br />
        <input type="text" placeholder="Rating" ref={ratingrefrence} />
        <br />
        <br />
        Description:
        <br />
        <textarea placeholder="Description" ref={descrefrence} />
        <br />
        <br />
        <button type="submit">Add a Movie</button>
      </form>
    </>
  );
};
export default AddMovie;
