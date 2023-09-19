//valid option for type (movie, series, episode)
export const fetchMoviesByValueAndType = async (value, type) => {
  try {
    let res = await fetch(
      "http://www.omdbapi.com/?apikey=" +
        process.env.REACT_APP_API_KEY +
        "&s=" +
        value +
        "&type=" +
        type
    );
    if (res.ok) {
      const body = await res.json();
      return body.Search;
    } else {
      console.log("Error in fetch: response status", res.status);
      return { errMsg: "error in retrive data - " + res.status };
    }
  } catch (error) {
    console.log("Error in fetch: ", error);
    return { errMsg: "error in retrive data" };
  }
};

export const fetchMovieById = async (imdbId) => {
  try {
    let res = await fetch(
      "http://www.omdbapi.com/?apikey=" +
        process.env.REACT_APP_API_KEY +
        "&i=" +
        imdbId
    );
    if (res.ok) {
      const body = await res.json();
      return body;
    } else {
      console.log("Error in fetch: response status", res.status);
      return { errMsg: "error in retrive data - " + res.status };
    }
  } catch (error) {
    console.log("Error in fetch: ", error);
    return { errMsg: "error in retrive data" };
  }
};
