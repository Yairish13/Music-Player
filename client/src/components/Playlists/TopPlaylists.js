import React, { useEffect, useState } from "react";
import TopPlaylist from "./TopPlaylist";
import axios from "axios";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TopPlaylists() {
  const [topPlaylists, settopPlaylists] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/playlists/top_playlists");
        settopPlaylists(data);
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
    slidesToScroll: 2,
  };

  const style = {
    color: "white",
    textDecoration:"none",
  };


  return (
    <div>
      <div className="topPlaylists">
        <h2>Top Playlists</h2>
        <Link style={style} to="/playlists">See all</Link>
      </div>
      <Slider {...settings}>
        {topPlaylists.map((topPlaylist) => (
          <TopPlaylist topPlaylist={topPlaylist} key={topPlaylist.id} />
        ))}
      </Slider>
    </div>
  );
}

export default TopPlaylists;
