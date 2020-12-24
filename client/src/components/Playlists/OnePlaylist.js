import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopSong from "../Songs/TopSong";
import './OnePlaylist.css'


function OnePlaylist() {
    const [playlist, setPlaylist] = useState([]);

    const { id } = useParams();
  
    useEffect(() => {
      (async () => {
        try {
          const { data } = await axios.get(`/playlists/${id}`);
          setPlaylist(data);
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
    console.log(playlist)
  
    return (
      <>
        {playlist.Songs && (
          <div className="oneplaylist">
            <h1>{playlist.name}</h1>
            <img className="playlistpic" src={playlist.playlistImg} />
            <Slider {...settings}>
              {playlist.Songs.map((topSong) => (
                <TopSong topSong={topSong} key={topSong.id} query={`/songs/${topSong.id}?playlists=${playlist.id}`} />
              ))}
            </Slider>
          </div>
        )}
      </>
    );
  }

export default OnePlaylist
