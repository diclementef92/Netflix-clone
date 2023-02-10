import { Component } from "react";
import { Nav } from "react-bootstrap";

class MyNav extends Component {
  render() {
    return (
      <Nav
        activeKey="Tv-Shows"
        onSelect={(selectedKey) => console.log(`selected ${selectedKey}`)}
        className="bg-dark p-2"
      >
        <a className="navbar-brand" href="#">
          <img src="/assets/img/logo.png" />
        </a>
        <Nav.Item>
          <Nav.Link eventKey="Home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Tv-Shows">Tv Shows</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Movies">Movies</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Recently">Recently Added</Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
}

export default MyNav;
