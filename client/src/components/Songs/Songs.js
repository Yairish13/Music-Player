import React, { useState, useEffect } from "react";
import axios from "axios";
import Song from "./Song";
import './Songs.css';

function Songs() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/songs");
        setSongs(data);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  return (
    <div className="songs">
      <h1>Songs</h1>
      {songs.map((song) => (
        <Song song={song} key={song.songId} />
      ))}
    </div>
  );
}

export default Songs;
