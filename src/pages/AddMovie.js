import axios from "axios";
import { useRef } from "react";
import { Link } from "react-router-dom";

const AddMovie = () => {
  const movierefrence = useRef();
  const ratingrefrence = useRef();
  const descrefrence = useRef();
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
        movieData
      );
      alert(response.data.message);
    } catch (error) {}
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
