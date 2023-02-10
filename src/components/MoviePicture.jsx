import { Component } from "react";

class MoviePicture extends Component {
  render() {
    return <img className="poster m-4" src={this.props.src}></img>;
  }
}

export default MoviePicture;
