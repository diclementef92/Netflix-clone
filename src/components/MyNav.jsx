import { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

class MyNav extends Component {
  render() {
    return (
      <Navbar bg="dark" data-bs-theme="dark" activeKey="Home">
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

// <Nav
//         activeKey="Tv-Shows"
//         onSelect={(selectedKey) => console.log(`selected ${selectedKey}`)}
//         className="bg-dark p-2"
//       >
//         <a className="navbar-brand" href="#">
//           <img src="/assets/img/logo.png" />
//         </a>
//         <Nav.Item>
//           <Nav.Link eventKey="Home">Home</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="Tv-Shows">Tv Shows</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="Movies">Movies</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="Recently">Recently Added</Nav.Link>
//         </Nav.Item>
//       </Nav>
