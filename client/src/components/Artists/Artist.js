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
      <Link style={style} to={`/artists/${artist.id}`}>
        <img className="artistpic" src={artist.artistImg}></img>
        <br></br>
        {artist.name}
      </Link>
    </div>
  );
}

export default Artist;
