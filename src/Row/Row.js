import React, { useEffect, useState } from "react";
import axios from "../axios-instance";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

import classes from "./Row.module.css";

const IMAGE_BASEURL = "https://image.tmdb.org/t/p/original/";

const Row = (props) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const { fetchURL, title, isLargeRow } = props;
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchURL);
      const returnedMovies = response.data.results;
      setMovies(returnedMovies);
      return response;
    }
    fetchData();
  }, [fetchURL]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const escapeTrailerHandler = () => {
    if (trailerUrl) {
      setTrailerUrl("")
    }
    else {
      return
    }
  }

  const movieTrailerHandler = (movie) => {
    console.log(movie);
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name || movie?.original_title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className={classes.Row}>
      <h2>{title}</h2>
      <div className={classes.Posters}>
        {movies.map((movie) => {
          return (
            <img
              onClick={title !== 'NETFLIX ORIGINALS' ? () => movieTrailerHandler(movie) : null}
              className={`${classes.Poster} ${
                isLargeRow && classes.PosterLarge
              }`}
              src={`${IMAGE_BASEURL}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              key={movie.id}
            />
          );
        })}
      </div>
      {trailerUrl && <button className={classes.escape} onClick={escapeTrailerHandler}>X</button>}
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
