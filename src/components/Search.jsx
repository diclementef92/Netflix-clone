import { useEffect, useState } from "react";
import { Col, Placeholder, Row } from "react-bootstrap";
import MoviePicture from "./MoviePicture";
import { fetchMoviesByValueAndType } from "../fetches/fetchMovies";
import { useParams } from "react-router-dom";
import Movies from "./Movies";
import TvShows from "./TvShows";

const Search = (props) => {
  let { value } = useParams();

  useEffect(() => {}, []);

  return (
    <>
      <Movies search={value} />
      <TvShows search={value} />
    </>
  );
};
export default Search;
