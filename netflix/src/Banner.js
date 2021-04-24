import React, { useEffect, useState } from "react";
import requests from "./requests";
import axios from "./axios";
// import "./Banner.css";
const base_url = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      // console.table(request);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
    }
    fetchData();
  }, []);

  console.table(movie);
  return (
    <div>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url('${base_url}${movie?.backdrop_path}')`, //optional chaining: no need to check if movie is undefined '?' saw this neat trick on stackoverflow
          backgroundPosition: "center center",
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {/* i notice that some movies give u a title a name or an orginal name , api information isnt consistent   */}
            {movie?.name || movie?.title || movie?.orginal_name}
          </h1>
          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">More Info</button>
          </div>
          <p className="banner__description">{movie?.overview}</p>
        </div>
        <div className="banner--fadeBottom" />

        {/* Background image */}
        {/* title */}
      </header>
    </div>
  );
}

export default Banner;
