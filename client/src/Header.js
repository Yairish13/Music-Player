import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import AudiotrackIcon from "@material-ui/icons/Audiotrack";
import HomeIcon from "@material-ui/icons/Home";
import QueueMusicIcon from "@material-ui/icons/QueueMusic";
import InfoIcon from "@material-ui/icons/Info";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import PersonIcon from "@material-ui/icons/Person";
import StarsIcon from "@material-ui/icons/Stars";

function Header() {
  const style = {
    color: "white",
    textDecoration: "none",
  };

  return (
    <nav>
      {/* <ul className="navLinks"> */}
      <NavLink activeStyle={{ color: "#ee5050" }} style={style} to="/songs">
        <div className="homenav">
          <span>Songs</span>
          <AudiotrackIcon />
        </div>
      </NavLink>
      <NavLink activeStyle={{ color: "#ee5050" }} style={style} to="/artists">
        <div className="homenav">
          Artists
          <PersonIcon />
        </div>
      </NavLink>

      <NavLink activeStyle={{ color: "#ee5050" }} style={style} exact to="/">
        <div className="homenav">
          Top Charts
          <StarsIcon />
        </div>
      </NavLink>

      <NavLink activeStyle={{ color: "#ee5050" }} style={style} to="/albums">
        <div className="homenav">
          Albums
          <LibraryMusicIcon />
        </div>
      </NavLink>

      <NavLink activeStyle={{ color: "#ee5050" }} style={style} to="/playlists">
        <div className="homenav">
          Playlists
          <QueueMusicIcon />
        </div>
      </NavLink>

      {/* </ul> */}
    </nav>
  );
}

export default Header;
