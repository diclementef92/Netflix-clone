import { useEffect, useState } from "react";
import { Col, Placeholder, Row } from "react-bootstrap";
import MoviePicture from "./MoviePicture";
import { fetchMoviesByValueAndType } from "../fetches/fetchMovies";

const TvShows = (props) => {
  // state = {
  //   tvshows: [],
  // };
  const [tvshows, setTvshows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errMsg, setErrMsg] = useState("");

  const retriveData = async () => {
    const data = await fetchMoviesByValueAndType(props.search, "series");
    console.log(data);
    if (data.errMsg) {
      setErrMsg(data.errMsg);
    }
    setTvshows(data);
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
          {tvshows.slice(0, 4).map((movie) => {
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

export default TvShows;
