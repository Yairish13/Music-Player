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
  
    return (
      <>
        {playlist.length > 0 && (
          <div className="oneplaylist">
            <h1>{playlist[0].plName}</h1>
            <img className="playlistpic" src={playlist[0].cover_img} />
            <Slider {...settings}>
              {playlist.map((topSong) => (
                <TopSong topSong={topSong} key={topSong.id} query={`/song/${topSong.songId}?playlist=${playlist[0].id}`} />
              ))}
            </Slider>
          </div>
        )}
      </>
    );
  }

export default OnePlaylist
