import React, { useState, useEffect } from "react";
import TopSong from "./TopSong";
import axios from "axios";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TopSongs.css";

function TopSongs() {
  const [topSongs, setTopSongs] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/songs/top_songs");
        setTopSongs(data);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    variableWidth: true,
  };

  const style = {
    color: "white",
    textDecoration: "none",
  };

  return (
    <div>
      {topSongs.Songs && (
        <>
          <div className="topSongs">
            <h2>Top Songs</h2>
            <Link to="/songs" style={style}>
              See all
            </Link>
            <br></br>
          </div>
          <Slider {...settings}>
            {topSongs.Songs.map((topSong) => (
              <TopSong topSong={topSong} key={topSong.id} />
            ))}
          </Slider>
        </>
      )}
    </div>
  );
}

export default TopSongs;
