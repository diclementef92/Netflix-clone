import { Component, useEffect, useState } from "react";
import { Alert, Col, Placeholder, Row } from "react-bootstrap";
import MoviePicture from "./MoviePicture";
import { fetchMoviesByValueAndType } from "../fetches/fetchMovies";

const Movies = (props) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errMsg, setErrMsg] = useState("");

  const retriveData = async () => {
    const data = await fetchMoviesByValueAndType(props.search, "movie");
    console.log(data);
    if (data.errMsg) {
      setErrMsg(data.errMsg);
    }
    setMovies(data);
    setIsLoading(false);
  };

  useEffect(() => {
    retriveData();
  }, []);

  return (
    <>
      <h2 className="text-light mt-4">{props.search}</h2>
      {isLoading ? (
        <Placeholder as="p" animation="glow">
          <Placeholder xs={12} />
        </Placeholder>
      ) : (
        <Row>
          {movies.slice(0, 4).map((movie) => {
            return (
              <Col xs={12} sm={6} md={4} lg={3} key={movie.imdbID}>
                <MoviePicture movie={movie}></MoviePicture>
              </Col>
            );
          })}
        </Row>
      )}
    </>
  );
};
export default Movies;
