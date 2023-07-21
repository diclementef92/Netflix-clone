import { useState } from "react";
import { Container, Image } from "react-bootstrap";

const Carousel = () => {
  const images = [
    "https://picsum.photos/id/22/600/300",
    "https://picsum.photos/id/30/600/300",
    "https://picsum.photos/id/43/600/300",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    console.log("next");
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    console.log("prev");
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <Container>
      <div className="carousel">
        <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} />
        <div className="carousel-buttons">
          <button onClick={handlePrev}>Prev</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </Container>
  );
};

export default Carousel;
