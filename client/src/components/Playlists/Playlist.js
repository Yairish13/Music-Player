import React from 'react'
import { Link } from 'react-router-dom'
import './Playlist.css'

function Playlist({playlist}) {

    const style2 = {
        color: "black",
        textDecoration: "none",
        cursor: "pointer"
      };
    return (
        <div className="playlistpage">
          <Link style={style2} to={`/playlists/${playlist.id}`}>
            <img src={playlist.playlistImg}></img><br></br>
            {playlist.name}
            </Link>
        </div>
    )
}

export default Playlist
