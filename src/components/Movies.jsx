import { Component } from "react";
import { Col, Row } from "react-bootstrap";
import MoviePicture from "./MoviePicture";

class Movies extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    try {
      let res = await fetch(
        "http://www.omdbapi.com/?apikey=1bbfedb5&s=harry potter"
      );
      if (res.ok) {
        const body = await res.json();
        this.setState({ movies: body.Search });

        // this.state.movies = body.Search;//non funziona

        // console.log(body.Search);
        // console.log(this.state.movies);
      } else {
        console.log("Error in fetch: ", res.status);
      }
    } catch (error) {
      console.log("Error in fetch: ", error);
    }
  }

  render() {
    return (
      <Row>
        <h2 className="text-light mt-4">Tv Shows</h2>
        {this.state.movies.map((movie) => {
          return (
            <Col xs={12} sm={6} md={4}>
              <MoviePicture
                src={movie.Poster}
                key={movie.imdbID}
              ></MoviePicture>
            </Col>
          );
        })}
      </Row>
    );
  }
}

export default Movies;
