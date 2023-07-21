import { Carousel, Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <h1 className="text-center">Benvenuto su My Netflix</h1>
      <Carousel />
      {/* <div className="form-container">
        <input type="email" placeholder="Inserisci la tua email" />
        <div className="buttons">
          <button>Accedi</button>
          <button>Registrati</button>
        </div>
      </div> */}
    </Container>
  );
};

export default Home;
