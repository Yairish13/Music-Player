import React, { useState, useEffect } from "react";
import axios from "axios";
import Playlist from "./Playlist";
import './Playlists.css'

function Playlists() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/playlists");
        setPlaylists(data);
      } catch (error) {}
    })();
  }, []);

  return (
    <>
      <h1>Playlists</h1>

      <div className="playlists">
        {playlists.map((playlist) => (
          <Playlist playlist={playlist} key={playlist.id} />
        ))}
      </div>
    </>
  );
}

export default Playlists;
