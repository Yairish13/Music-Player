import React, { useEffect, useState } from "react";
import TopAlbum from "./TopAlbum";
import axios from "axios";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TopAlbums() {
  const [topAlbums, setTopAlbums] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/top_albums");
        setTopAlbums(data);
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
      <div className="topAlbums">
        <h2>Top Albums</h2>
        <Link style={style} to="/albums">
          See all
        </Link>
      </div>

      <Slider {...settings}>
        {topAlbums.map((topAlbum) => (
          <TopAlbum topAlbum={topAlbum} key={topAlbum.id} />
        ))}
      </Slider>
    </div>
  );
}

export default TopAlbums;
