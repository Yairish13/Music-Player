import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Albums from "./components/Albums/Albums";
import Artists from "./components/Artists/Artists";
import Songs from "./components/Songs/Songs";
import Playlists from "./components/Playlists/Playlists";
import Header from "./Header";
import Home from './Home';
import OneArtist from "./components/Artists/OneArtist";
import OneAlbum from "./components/Albums/OneAlbum";
import OnePlaylist from "./components/Playlists/OnePlaylist";
import OneSong from './components/Songs/OneSong'
import Error from './Error';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/songs" component={Songs} />
        <Route exact path="/artists" component={Artists} />
        <Route exact path="/albums" component={Albums} />
        <Route exact path="/playlists" component={Playlists} />
        <Route path="/artists/:id" component={OneArtist} />
        <Route path="/albums/:id" component={OneAlbum} />
        <Route path="/playlists/:id" component={OnePlaylist} />
        <Route path="/songs/:id" component={OneSong}/>
        {/* <Route exact path="/*" component={Error}/> */}

      </Switch>

    </Router>
  );
}

export default App;
