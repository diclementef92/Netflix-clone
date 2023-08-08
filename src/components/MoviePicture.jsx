import { useState } from "react";
import { Alert, Button, Image, Modal, Table } from "react-bootstrap";
import MovieDetail from "./MovieDetail";
import { fetchMovieById } from "../fetches/fetchMovies";

const MoviePicture = (props) => {
  const [show, setShow] = useState(false);
  const [movieData, setMovieData] = useState({});
  const handleClose = () => setShow(false);
  const [errMsg, setErrMsg] = useState("");

  const handleShow = async () => {
    const data = await fetchMovieById(props.movie.imdbID);
    if (data.errMsg) {
      setErrMsg(data.errMsg);
      setShow(true);
      return;
    }
    setMovieData(data);
    setShow(true);
  };

  return (
    <>
      <Image
        onClick={handleShow}
        className="poster my-4"
        src={props.movie.Poster}
      />
      {errMsg ? (
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={true}
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Alert key="light" variant="light">
              {errMsg}
            </Alert>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Go back to List
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={true}
        >
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
      )}
    </>
  );
};

export default MoviePicture;
