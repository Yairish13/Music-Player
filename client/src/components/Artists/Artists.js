import React, { useState, useEffect } from "react";
import axios from "axios";
import Artist from "./Artist";
import "./Artists.css";

function Artists() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/artists");
        setArtists(data);
      } catch (error) {}
    })();
  }, []);

  return (
    <>
      <h1>Artists</h1>

      <div className="artists">
        {artists.map((artist) => (
          <Artist artist={artist} key={artist.id} />
        ))}
      </div>
    </>
  );
}

export default Artists;
