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
        <Link style={style1} to={`/songs/${song.id}`}>
          <div>
            <PlayCircleOutlineIcon style={{position:"absolute", right:"90%" }} />  
            <div className="content"> 
          {song.Artist.name} - {song.name} {song.length} Album:
          {song.Album.name}
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
