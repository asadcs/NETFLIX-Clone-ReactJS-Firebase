import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLarge }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // console.table(request);
      setMovies(request.data.results);

      return request;
    }

    fetchData();
  }, [fetchUrl]);

  //console.table(movies);
  const youtubeOpts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const movieClickedHandler = (movie) => {
    console.log(movie?.name || movie?.title || movie?.orginal_name || "");

    if (trailerUrl != "") setTrailerUrl("");
    else {
      movieTrailer(movie?.name || movie?.title || movie?.orginal_name || "")
        .then((url) => {
          console.log(url);
          const urlParamV = new URLSearchParams(new URL(url).search);
          console.log(urlParamV.get("v"));
          setTrailerUrl(urlParamV.get("v"));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="row">
      <h2> {title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            onClick={() => movieClickedHandler(movie)}
            key={movie.id}
            src={`${base_url}${
              isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            className={`row__poster ${isLarge && "row__posterLarge"}`}
          />
        ))}
      </div>
      {trailerUrl != "" && <YouTube videoId={trailerUrl} opts={youtubeOpts} />}
    </div>
  );
}

export default Row;
