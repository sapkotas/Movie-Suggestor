import axios from "axios";
import { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import MovieNavBar from "../components/MovieNavBar";

const AddMovie = () => {
  const history = useHistory();

  const movie_name_reference = useRef();
  const rating_reference = useRef();
  const desc_reference = useRef();

  const addMovieHandler = async (e) => {
    e.preventDefault();

    const movieData = {
      movie_name: movie_name_reference.current.value,
      rating: rating_reference.current.value,
      description: desc_reference.current.value,
    };

    try {
      const response = await axios.post(
        "https://api.dynoacademy.com/test-api/v1/movies",
        movieData,
        {
          timeout: 10000,
        }
      );
      alert(response.data.message);
      history.replace("/");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.errors[0].message);
      } else {
        alert("Unknown error occoured! Try again later.");
      }
    }
  };

  return (
    <>
      <MovieNavBar />

      <Container>
        <br />
        <form onSubmit={addMovieHandler}>
          <h3>Add a movie: </h3>

          <Form.Group className="mb-3">
            <Form.Label>Movie name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter movie name"
              ref={movie_name_reference}
              autoComplete={false}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              type="number"
              ref={rating_reference}
              autoComplete={false}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>

            <Form.Control
              as="textarea"
              placeholder="Description"
              ref={desc_reference}
              style={{ height: "100px" }}
            />
          </Form.Group>

          <Button variant="dark" type="submit">
            Add a Movie
          </Button>
        </form>
      </Container>
    </>
  );
};

export default AddMovie;