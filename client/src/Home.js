import React from 'react'
import TopAlbums from './components/Albums/TopAlbums'
import TopArtists from './components/Artists/TopArtists'
import TopPlaylists from './components/Playlists/TopPlaylists'
import TopSongs from './components/Songs/TopSongs'
import './App.css'
function Home() {
  
    return (
        <div className="home">
            <TopSongs/>
            <br></br>
            <TopAlbums/>
            <br></br>
            <TopArtists/>
            <br></br>
            <TopPlaylists/>
        </div>
    )
}

export default Home
