import React from "react";
import "./Artist.css";
import { Link } from "react-router-dom";

function Artist({ artist }) {
  const style = {
    color: "black",
    textDecoration: "none",
    cursor: "pointer"
  };
  return (
    <div className="artistPage">
      <Link style={style} to={`/artist/${artist.artistId}`}>
        <img className="artistpic" src={artist.cover_img}></img>
        <br></br>
        {artist.artistName}
      </Link>
    </div>
  );
}

export default Artist;
