import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Movies from "./Movies";
import TvShows from "./TvShows";

const Search = () => {
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
