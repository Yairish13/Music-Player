import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopSong from "../Songs/TopSong";
import "./OneAlbum.css";

function OneAlbum() {
  const [album, setAlbum] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`/albums/${id}`);
        setAlbum(data);
      } catch (error) {}
    })();
  }, [id]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
  };
  const style2 = {
    color: "black",
    textDecoration: "none",
    cursor: "pointer",
  };

  console.log(album);

  return (
    <>
      {album.length > 0 && (
        <div className="albumPage">
          <h1>{album[0].albumName}</h1>
          <div>
          <Link style={style2} to={`/artist/${album[0].artistId}`}>
            <h3>by {album[0].name}</h3>
            <img className="albumpic" src={album[0].cover_img} />
          </Link>
          </div>

          <div>
            <Slider {...settings}>
              {album.map((topSong) => (
                <TopSong topSong={topSong} key={topSong.id} query={`/song/${topSong.songId}?album=${album[0].album_id}`} />
              ))}
            </Slider>
          </div>
        </div>
      )}
    </>
  );
}

export default OneAlbum;
