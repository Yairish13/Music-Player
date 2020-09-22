import React, { useState, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopSong from "../Songs/TopSong";
import ReactPlayer from "react-player";
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import './OneSong.css'

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
        setSong(data[0]);
        if (query.get("album")) {
          setQueryName(`album=${query.get("album")}`);
          const { data } = await axios.get(`/albums/${query.get("album")}`);
          setList(data);
        } else if (query.get("artist")) {
          setQueryName(`artist=${query.get("artist")}`);
          const { data } = await axios.get(`/artists/${query.get("artist")}`);
          setList(data);
        } else if (query.get("playlist")) {
          setQueryName(`playlist=${query.get("playlist")}`);
          const { data } = await axios.get(
            `/playlists/${query.get("playlist")}`
          );
          setList(data);
        } else {
          setQueryName(`top_songs=true`);

          const { data } = await axios.get(`/top_songs`);
          setList(data);
        }
      } catch (error) {}
    })();
  }, [id]);

  const next=()=>{
    const counter = list.findIndex(item=>item.title == song.title)
    if(counter == list.length-1){
      alert("End of the list")
    }
    else{
      setSong(list[counter+1])
    }
  }

  const previous =() =>{
    const counter = list.findIndex(item=>item.title == song.title)
    if(counter == 0){
      alert("Start of the list")
    }
    else{
      console.log(song)
      console.log(counter)
      setSong(list[counter-1])
    }
  }

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
    boxShadow:"5px 8px 5px 0px rgba(0, 0, 0, 0.75)"
  //   marginBottom: "40px",
  //   left:"50%",
  //   position:"relative",
  // transform: 'translate(-50%, 0%)',
  };

  const style2 = {
    color: "black",
    textDecoration: "none",
    cursor: "pointer",
  };
  console.log(list)

  return (
    <>
      {list.length > 0 && (
        <div className="onesong">
          <h1>{song.title}</h1>
          <Link style={style2} to={`/artist/${song.artistId}`}>
            <h2>by {song.artistName}</h2>
          </Link>


          <Link style={style2} to={`/album/${song.albumId}`}>
            <h4>{song.albumName}</h4>
          </Link>
          <div className='vidnbtn'>
          <SkipPreviousIcon style={{fontSize:"100px",paddingTop:"100px",paddingLeft:"100px"}} 
           onClick={previous}>previous</SkipPreviousIcon>
          <ReactPlayer
          controls={true}
            style={style}
            playing={true}
            width="350px"
            height="280px"
            url={song.youtube_link}
          />
          <SkipNextIcon style={{fontSize:"100px", paddingTop:"100px",paddingRight:"100px"}}
           onClick={next}>Next</SkipNextIcon>
          </div>
          <Slider {...settings}>
            {list.map((song) => {
              console.log(song);
              return (
                <TopSong
                  topSong={song}
                  key={song.songId}
                  query={`/song/${song.songId}?${queryName}`}
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
