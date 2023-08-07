import { Component } from "react";
import { Container, Image, InputGroup, Nav, Navbar } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";

class MyNav extends Component {
  render() {
    return (
      <Navbar expand="lg" bg="dark" data-bs-theme="dark" activekey="Home">
        <Container>
          <Navbar.Brand href="#home">
            <Image src="/assets/img/logo.png" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
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
            <div class="input-group search-bar">
              <input
                class="form-control border-secondary"
                type="seach"
                value="search"
              />
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button">
                  <FiSearch />
                </button>
              </div>
            </div>
          </Navbar.Collapse>{" "}
        </Container>
      </Navbar>
    );
  }
}

export default MyNav;
