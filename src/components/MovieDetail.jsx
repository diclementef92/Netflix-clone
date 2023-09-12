import { Table } from "react-bootstrap";

const MovieDetail = ({ movieData }) => {
  return (
    <>
      <Table striped>
        <tbody>
          <tr>
            <td>
              <strong>Year:</strong>
            </td>
            <td>{movieData.Year}</td>
          </tr>
          <tr>
            <td>
              <strong>Director:</strong>
            </td>
            <td>{movieData.Director}</td>
          </tr>
          <tr>
            <td>
              <strong>Actors:</strong>
            </td>
            <td>{movieData.Actors}</td>
          </tr>
          <tr>
            <td>
              <strong>Plot:</strong>
            </td>
            <td>{movieData.Plot}</td>
          </tr>
          <tr>
            <td>
              <strong>Genre:</strong>
            </td>
            <td>{movieData.Genre}</td>
          </tr>
          <tr>
            <td>
              <strong>IMDB Rating:</strong>
            </td>
            <td>{movieData.imdbRating}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default MovieDetail;
