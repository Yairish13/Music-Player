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
  const [artistSongs, setArtistSongs] = useState([]);
  const [artistAlbums, setArtistAlbum] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`/artists/${id}`);
        setArtistSongs(data);
      } catch (error) {
        console.log(error.message);
      }
      try {
        const { data } = await axios.get(`/albumByArtist/${id}`);
        setArtistAlbum(data);
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
      {artistAlbums.length > 0 && (
        <div className="oneartist">
          <h1>{artistSongs[0].artistName}</h1>
          <img className="artistpic" src={artistSongs[0].cover_img} />
          <h2>{artistSongs[0].artistName}'s Songs</h2>
          <Slider {...settings}>
            {artistSongs.map((topSong) => (
              <TopSong topSong={topSong} key={topSong.songId} query={`/song/${topSong.id}?artist=${artistSongs[0].artistId}`} />
            ))}
          </Slider>
          <h2>{artistSongs[0].artistName}'s Albums</h2>
            {artistAlbums.map((topAlbum) => (
              <TopAlbum topAlbum={topAlbum} key={topAlbum.albumId} />
            ))}
            <br></br>
        </div>
      )}
    </div>
  );
}

export default OneArtist;
