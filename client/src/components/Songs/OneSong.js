import React, { useState, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopSong from "../Songs/TopSong";
import ReactPlayer from "react-player";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import "./OneSong.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function OneSong() {
  const [song, setSong] = useState([]);
  const [list, setList] = useState([]);
  const [queryName, setQueryName] = useState("");

  let query = useQuery();
  const { id } = useParams();

  useEffect(() => {
    (async () => {

      try {
        const { data } = await axios.get(`/songs/${id}`);
        console.log(data);
        setSong(data);
        if (query.get("albums")) {
          setQueryName(`albums=${query.get("albums")}`);
          const { data } = await axios.get(`/albums/${query.get("albums")}`);
          setList(data);
        } else if (query.get("artists")) {
          setQueryName(`artists=${query.get("artists")}`);
          const { data } = await axios.get(`/artists/${query.get("artists")}`);
          setList(data);
        } else if (query.get("playlists")) {
          setQueryName(`playlists=${query.get("playlists")}`);
          const { data } = await axios.get(
            `/playlists/${query.get("playlists")}`
          );
          setList(data);
        } else {
          setQueryName(`top_songs=true`);
          const { data } = await axios.get(`/songs/top_songs`);
          setList(data);
        }
      } catch (error) {}
      try{
        console.log("list"+ list)
        if(!list.Songs){
          list.Songs = list
        }
      }
      catch(error){console.log(error)}

    })();
  }, [id]);

  const next = () => {
    const counter = list.Songs.findIndex((item) => item.name == song.name);
    if (counter == list.Songs.length - 1) {
      alert("End of the list");
      setSong(list.Songs[0])
    } else {
      setSong(list.Songs[counter + 1]);
    }
  };

  const previous = () => {
    const counter = list.Songs.findIndex((item) => item.name == song.name);
    if (counter == 0) {
      alert("Start of the list");
      setSong(list.Songs[0])
    } else {
      setSong(list.Songs[counter - 1]);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
  };
  const style = {
    borderRadius: "25px",
    overflow: "hidden",
    boxShadow: "5px 8px 5px 0px rgba(0, 0, 0, 0.75)",
  };

  const style2 = {
    color: "black",
    textDecoration: "none",
    cursor: "pointer",
  };
  console.log(song);
  console.log(list);
  return (
    <>
      {list.Songs && song && (
        <div className="onesong">
          <h1>{song.name}</h1>
          <Link style={style2} to={`/artists/${song.artistId}`}>
            <h2>by {song.Artist.name}</h2>
          </Link>

          <Link style={style2} to={`/albums/${song.albumId}`}>
            <h4>{song.Album.name}</h4>
          </Link>
          <div className="vidnbtn">
            <SkipPreviousIcon
              style={{
                fontSize: "100px",
                paddingTop: "100px",
                paddingLeft: "100px",
              }}
              onClick={previous}
            >
              previous
            </SkipPreviousIcon>
            <ReactPlayer
              controls={true}
              style={style}
              playing={true}
              width="350px"
              height="280px"
              url={song.youtubeLink}
            />
            <SkipNextIcon
              style={{
                fontSize: "100px",
                paddingTop: "100px",
                paddingRight: "100px",
              }}
              onClick={next}
            >
              Next
            </SkipNextIcon>
          </div>
          <Slider {...settings}>
            {list.Songs.map((song) => {
              console.log(song);
              return (
                <TopSong
                  topSong={song}
                  query={`/songs/${song.id}?${queryName}`}
                />
              );
            })}
          </Slider>
        </div>
      )}
    </>
  );
}

export default OneSong;
