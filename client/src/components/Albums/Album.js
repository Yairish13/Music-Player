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
      <Link style={style} to={`/album/${album.albumId}`}>
        <img src={album.cover_img}></img>
        <br></br>
        {album.albumName} by {album.artistName}
      </Link>
    </div>
  );
}

export default Album;
