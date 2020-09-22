import React, { useState, useEffect } from "react";
import axios from "axios";
import Album from "./Album";
import "./Albums.css";

function Albums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/albums");
        setAlbums(data);
      } catch (error) {}
    })();
  }, []);

  return (
    <>
      <h1>Albums</h1>

      <div className="albums">
        {albums.map((album) => (
          <Album album={album} key={album.albumId} />
        ))}
      </div>
    </>
  );
}

export default Albums;
