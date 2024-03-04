import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import MovieNavBar from "../components/MovieNavBar";

const ViewMovie = () => {
  const { id } = useParams(); // Destructure useParams directly

  const [movieData, setMovieData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getSingleMovieInfo = async () => {
      try {
        const response = await axios.get(
          `https://api.dynoacademy.com/test-api/v1/movie/${id}`
        );
        setMovieData(response.data.singleMovieData);
        setLoading(false);
      } catch (error) {
        setError("Error occurred while fetching data.");
        setLoading(false);
      }
    };

    getSingleMovieInfo();
  }, [id]); // Depend on `id` parameter changes

  return (
    <>
      <MovieNavBar />
      <Container>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <>
            <h1 className="text-info">{movieData.name}</h1>
            <br />
            <p>Info: {movieData.info}</p>
            <Card body>{movieData.desc}</Card>
            <br />
            <Card body>
              Image: <br />
              <img
                src={movieData.image}
                style={{ height: "200px" }}
                alt="Imageisloading..."
              ></img>{" "}
            </Card>
            <br />
            <Card body>Rating: {movieData.rating}</Card>
            <br />
            <Link to="/">
              <Button className="bg-dark">Go Back!</Button>
            </Link>
            <br />
            <br />
          </>
        )}
      </Container>
    </>
  );
};

export default ViewMovie;
