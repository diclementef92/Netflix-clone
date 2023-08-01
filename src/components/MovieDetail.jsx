import { Component, useState } from "react";
import Modal from "react-modal";

const MovieDetail = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function afterOpenModal() {}
  function closeModal() {}

  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
    >
      mio modale
    </Modal>
  );
};

export default MovieDetail;
