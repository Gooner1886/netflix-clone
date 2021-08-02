import React, { useEffect, useState } from "react";
import axios from "../axios-instance";
import requests from "../requests";

import classes from "./Banner.module.css";

const Banner = (props) => {
  const [bannerMovie, setBannerMovie] = useState([]);

  useEffect(() => {
    async function fetchBannerMovie() {
      const response = await axios.get(requests.findNetflixOriginals);
      setBannerMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
      return response;
    }
    fetchBannerMovie();
  }, []);

  console.log(bannerMovie);

  function truncate(str, n) {
      return str?.length > n ? str.substr(0, n-1) + "..." : str;
  }

  return (
    <header
      className={classes.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${bannerMovie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className={classes.content}>
        <h1 className={classes.title}>
          {bannerMovie?.title ||
            bannerMovie?.name ||
            bannerMovie?.original_name}
        </h1>
        <div>
            <button className={classes.bannerButton}>Play</button>
            <button className={classes.bannerButton}>My List</button>
        </div>
        <h1 className={classes.description}>
            {truncate(bannerMovie?.overview, 125)}
        </h1>

        <div className={classes.bannerFade}/>
      </div>
    </header>
  );
};

export default Banner;
