import { Component } from "react";
import { Col, Row } from "react-bootstrap";
import MoviePicture from "./MoviePicture";

class TvShows extends Component {
  state = {
    tvshows: [],
  };

  async componentDidMount() {
    try {
      let res = await fetch(
        "http://www.omdbapi.com/?apikey=1bbfedb5&s=" +
          this.props.search +
          "&type=series"
      );
      if (res.ok) {
        const body = await res.json();
        this.setState({ tvshows: body.Search });
      } else {
        console.log("Error in fetch: response status", res.status);
      }
    } catch (error) {
      console.log("Error in fetch: ", error);
    }
  }

  render() {
    return (
      <>
        <h2 className="text-light mt-4">{this.props.search}</h2>
        <Row>
          {this.state.tvshows.slice(0, 4).map((movie) => {
            return (
              <Col xs={12} sm={6} md={4} lg={3} key={movie.imdbID}>
                <MoviePicture movie={movie}></MoviePicture>
              </Col>
            );
          })}
        </Row>
      </>
    );
  }
}

export default TvShows;
