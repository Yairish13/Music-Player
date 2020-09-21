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
      <Link style={style} to={`/album/${album.id}`}>
        <img src={album.cover_img}></img>
        <br></br>
        {album.album_name} by {album.artist_name}
      </Link>
    </div>
  );
}

export default Album;
