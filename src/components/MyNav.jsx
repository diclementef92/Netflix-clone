import { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

class MyNav extends Component {
  render() {
    return (
      <Navbar bg="dark" data-bs-theme="dark" activekey="Home">
        <Container>
          <Navbar.Brand href="#home">
            <img src="/assets/img/logo.png" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="./home" eventKey="Home">
              Home
            </Nav.Link>
            <Nav.Link href="./tvshows" eventKey="Tv Shows">
              Tv Shows
            </Nav.Link>
            <Nav.Link href="./movies" eventKey="Movies">
              Movies
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default MyNav;
