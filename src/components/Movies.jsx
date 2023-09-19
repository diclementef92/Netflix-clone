import { useEffect, useState } from "react";
import { Alert, Col, Placeholder, Row } from "react-bootstrap";
import MoviePicture from "./MoviePicture";
import { fetchMoviesByValueAndType } from "../fetches/fetchMovies";

const Movies = (props) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errMsg, setErrMsg] = useState("");

  const retriveData = async () => {
    const data = await fetchMoviesByValueAndType(props.search, "movie");

    if (data.errMsg) {
      setErrMsg(data.errMsg);
      setIsLoading(false);
      return;
    }
    setErrMsg("");
    setMovies(data);
    setIsLoading(false);
  };

  useEffect(() => {
    retriveData();
  }, [props.search]);

  return (
    <>
      <h2 className="text-light mt-4">Films about "{props.search}"</h2>
      {isLoading ? (
        <Placeholder as="p" animation="glow">
          <Placeholder xs={12} />
        </Placeholder>
      ) : errMsg ? (
        <Alert variant="danger">{errMsg}</Alert>
      ) : (
        <Row>
          {movies.slice(0, 4).map((movie) => {
            return (
              <Col xs={12} sm={6} lg={3} key={movie.imdbID}>
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
