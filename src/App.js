import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import MyNav from "./components/MyNav";
import Home from "./components/Home";
import Movies from "./components/Movies";
import MyFooter from "./components/MyFooter";
import TvShows from "./components/TvShows";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNav></MyNav>
        <Routes>
          <Route
            path="/home"
            element={
              <Container>
                <Home />
              </Container>
            }
          ></Route>
          <Route
            path="/movies"
            element={
              <Container>
                <Movies search="harry potter" />
                <Movies search="lord of the rings" />
                <Movies search="avengers" />
              </Container>
            }
          />
          <Route
            path="/tvshows"
            element={
              <Container>
                <TvShows search="crime" />
                <TvShows search="fantasy" />
              </Container>
            }
          />
          <Route
            path="/search/:value"
            element={
              <Container>
                <Search />
              </Container>
            }
          />
          <Route
            path="/*"
            element={
              <Container>
                <Home />
              </Container>
            }
          />
        </Routes>
      </BrowserRouter>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
