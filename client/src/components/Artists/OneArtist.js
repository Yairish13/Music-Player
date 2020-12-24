import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopSong from "../Songs/TopSong";
import "./OneArtist.css";
import TopAlbum from "../Albums/TopAlbum";

function OneArtist() {
  // const [artistSongs, setArtistSongs] = useState(null);
  // const [artistAlbums, setArtistAlbum] = useState(null);
  const [artist, setArtist] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`/artists/${id}`);
        setArtist(data)
        console.log(data)
      } catch (error) {
        console.log(error.message);
      }
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

  return (
    <div>
      {artist && (
        <div className="oneartist">
          <h1>{artist.name}</h1>
          <img className="artistpic" src={artist.artistImg} />
          <h2>{artist.name}'s Songs</h2>
          <Slider {...settings}>
            {artist.Songs.map((topSong) => (
              <TopSong topSong={topSong} key={topSong.id} query={`/songs/${topSong.id}?artists=${topSong.artistId}`} />
            ))}
          </Slider>
          <h2>{artist.name}'s Albums</h2>
            {artist.Albums.map((topAlbum) => (
              <TopAlbum topAlbum={topAlbum} key={topAlbum.id} />
            ))}
            <br></br>
        </div>
      )}
    </div>
  );
}

export default OneArtist;
