import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopSong from "../Songs/TopSong";
import "./OneAlbum.css";

function OneAlbum() {
  const [album, setAlbum] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`/albums/${id}`);
        setAlbum(data);
        console.log(data)
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

  return (
    <>
    
      {album && (
        <div className="albumPage">
          <h1>{album.name}</h1>
          <div>
          <Link style={style2} to={`/artists/${album.artistId}`}>
            <h3>by {album.Artist.name}</h3>
            <img className="albumpic" src={album.albumImg} />
          </Link>
          </div>
          
          <div>
            <Slider {...settings}>
              {album.Songs.map((topSong) => (
                <TopSong topSong={topSong} key={topSong.id} query={`/songs/${topSong.id}?albums=${topSong.albumId}`} />
              ))}
            </Slider>
          </div>
        </div>
      )}
    </>
  );
}

export default OneAlbum;
