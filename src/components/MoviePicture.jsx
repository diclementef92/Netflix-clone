import { useState } from "react";
import { Button, Image, Modal, Table } from "react-bootstrap";
import MovieDetail from "./MovieDetail";

const MoviePicture = (props) => {
  const [show, setShow] = useState(false);
  const [movieData, setMovieData] = useState({});
  const handleClose = () => setShow(false);

  const handleShow = async () => {
    try {
      let res = await fetch(
        "http://www.omdbapi.com/?apikey=1bbfedb5&i=" + props.movie.imdbID
      );
      if (res.ok) {
        const body = await res.json();
        setMovieData(body);
        console.log(body);
      } else {
        console.log("Error in fetch: response status", res.status);
      }
    } catch (error) {
      console.log("Error in fetch: ", error);
    }

    setShow(true);
  };

  return (
    <>
      <Image
        onClick={handleShow}
        className="poster my-4"
        src={props.movie.Poster}
      />
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={true}>
        <Modal.Header closeButton>
          <Image className="poster-sm me-2" src={props.movie.Poster} />
          <Modal.Title>{movieData.Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MovieDetail movieData={movieData} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Go back to List
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MoviePicture;
