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
      // <Navbar bg="dark" data-bs-theme="dark">
      // <Container>

      //     <img src="/assets/img/logo.png" />
      //   </a>
      //   <button
      //     className="navbar-toggler"
      //     type="button"
      //     data-toggle="collapse"
      //     data-target="#navbarSupportedContent"
      //     aria-controls="navbarSupportedContent"
      //     aria-expanded="false"
      //     aria-label="Toggle navigation"
      //   >
      //     <span className="navbar-toggler-icon"></span>
      //   </button>

      //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
      //     <ul className="navbar-nav mr-auto">
      //       <li className="nav-item">
      //         <a className="nav-link " href="/">
      //           Home <span className="sr-only"></span>
      //         </a>
      //       </li>
      //       <li className="nav-item ">
      //         <a className="nav-link" href="#">
      //           TV Shows
      //         </a>
      //       </li>
      //       <li className="nav-item">
      //         <a className="nav-link active" href="./movies">
      //           Movies
      //         </a>
      //       </li>
      //       <li className="nav-item">
      //         <a className="nav-link " href="#">
      //           Recently Added
      //         </a>
      //       </li>
      //       <li className="nav-item">
      //         <a className="nav-link " href="#">
      //           My List
      //         </a>
      //       </li>
      //     </ul>
      //     <i className="bi bi-search icons"></i>
      //     <div id="kids">KIDS</div>
      //     <i className="bi bi-bell icons"></i>
      //     <i className="bi bi-user icons"></i>
      //   </div>
      // </Nav>
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
