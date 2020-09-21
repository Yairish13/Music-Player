import React from "react";
import { Link } from "react-router-dom";
import "./Song.css";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';


function Song({ song }) {

  const style1 = {
    color: "black",
    textDecoration: "none",
    cursor: "pointer",
  };
  return (
    <div>
        <div className="songPage">
        <Link style={style1} to={`/song/${song.id}`}>
          <div>
            <PlayCircleOutlineIcon style={{position:"absolute", right:"90%" }} />  
            <div className="content"> 
          {song.artist_name} - {song.title} {song.length} Album:
          {song.album_name}
          </div>
        </div>
      </Link>
      </div>

      <br></br>
      <br></br>
    </div>
  );
}

export default Song;
