import React, { useEffect, useState } from "react";
import TopArtist from "./TopArtist";
import axios from "axios";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TopArtists() {
  const [topArtists, setTopArtists] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/artists/top_artists");
        setTopArtists(data);
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
  };

  const style = {
    color: "white",
    textDecoration: "none",
  };
  return (
    <div>
      <div className="topArtists">
        <h2>Top Artists</h2>
        <Link style={style} to={`/artists/${topArtists.id}`}>
          See all
        </Link>
      </div>
      <Slider {...settings}>
        {topArtists.map((topArtist) => (
          <TopArtist topArtist={topArtist} key={topArtist.id} />
        ))}
      </Slider>
    </div>
  );
}

export default TopArtists;
