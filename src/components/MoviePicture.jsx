import { useState } from "react";
import { Image } from "react-bootstrap";
import MovieDetail from "./MovieDetail";
import Modal from "react-modal";

const MoviePicture = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Image
        onClick={openModal}
        className="poster my-4"
        src={props.src}
      ></Image>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <MovieDetail />
      </Modal>
    </>
  );
};

export default MoviePicture;
