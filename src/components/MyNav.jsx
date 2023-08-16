import { useState } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const MyNav = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handlesearch = () => {
    console.log("searching:", searchValue);
    navigate("/search/" + searchValue);
  };

  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" activekey="Home">
      <Container>
        <Navbar.Brand href="#home">
          <Image src="/assets/img/logo.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home" eventKey="Home">
              Home
            </Nav.Link>
            <Nav.Link href="/tvshows" eventKey="Tv Shows">
              Tv Shows
            </Nav.Link>
            <Nav.Link href="/movies" eventKey="Movies">
              Movies
            </Nav.Link>
          </Nav>
          <div class="input-group search-bar">
            <input
              class="form-control border-secondary"
              type="seach"
              placeholder="search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-secondary"
                type="button"
                onClick={handlesearch}
              >
                <FiSearch />
              </button>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
