import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SongOverview } from './features/songs/SongOverview';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My Favorite Songs</h1>
      </header>
      <main>
        <SongOverview />
      </main>
      <footer>
        <p>© Copyright Detlef Dumpelmann 2021</p>
      </footer>
    </div>
  );
}

export default App;
