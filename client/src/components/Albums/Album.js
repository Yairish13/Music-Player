import React from "react";
import { Link } from "react-router-dom";
import "./Album.css";

function Album({ album }) {
    const style = {
        color: "black",
        textDecoration: "none",
        cursor: "pointer"
      };
  return (
    <div className="albumpage">
      <Link style={style} to={`/albums/${album.id}`}>
        <img src={album.albumImg}></img>
        <br></br>
        {album.name} by {album.Artist.name}
      </Link>
    </div>
  );
}

export default Album;
