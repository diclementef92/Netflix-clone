import { useState } from "react";
import { Container, Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  const images = [
    "https://picsum.photos/id/22/600/300",
    "https://picsum.photos/id/43/600/300",
    "https://picsum.photos/id/30/600/300",
  ];

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
      <h1 className="text-center">Benvenuto su My Netflix</h1>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <Image src={images[0]}></Image>
          <Carousel.Caption>
            <h3>Film</h3>
            <p>Tutti i tuoi film preferiti</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={images[1]}></Image>
          <Carousel.Caption>
            <h3>Serie Tv</h3>
            <p>Le migliori serie da guardare e riguardare</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={images[2]}></Image>
          <Carousel.Caption>
            <h3>Comodo</h3>
            <p>Da Pc, tablet e smartphone e disdici quando vuoi</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Home;
