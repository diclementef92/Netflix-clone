import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import MyNav from "./components/MyNav";
import Home from "./components/Home";
import Movies from "./components/Movies";
import MyFooter from "./components/MyFooter";
import TvShows from "./components/TvShows";

function App() {
  return (
    <div className="App">
      <MyNav></MyNav>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
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
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
