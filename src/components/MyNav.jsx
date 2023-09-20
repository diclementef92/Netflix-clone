import { useState } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const MyNav = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handlesearch = () => {
    console.log("searching:", searchValue.trim());
    navigate("/search/" + searchValue.trim());
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
            <Link to="/home" eventkey="Home">
              Home
            </Link>
            <Link to="/tvshows" eventkey="Tv Shows">
              Tv Shows
            </Link>
            <Link to="/movies" eventkey="Movies">
              Movies
            </Link>
          </Nav>
          <div className="input-group search-bar">
            <input
              className="form-control border-secondary"
              type="seach"
              placeholder="search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={(event) => {
                console.log(event.key);
                if (event.key === "Enter") handlesearch();
              }}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
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
