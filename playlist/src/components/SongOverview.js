import React from 'react';
import SongForm from "./SongForm";
import SongList from "./SongList";
import SongSelectionsPanel from './SongSelectionsPanel';
import SongSortingPanel from './SongSortingPanel';

export const SongOverview = () => {
  // in SongForm is de functie om nieuwe items toe te voegen
  // in SongList word de state van songs in de store pas opgehaald
  // in SongSortingPanel kun je de volgorde selecteren   
  // in SongSelectionsPanel  kun je filteren of selecteren wat je wilt zien
      return (
        <main>
            <SongForm />
            <table className="song__table" >
              <thead>
                <tr className="song-header">
                  <th className="song-row__item">Song</th>
                  <th className="song-row__item">Artist</th>
                  <th className="song-row__item">Genre</th>
                  <th className="song-row__item">Rating</th>
                </tr>
              </thead>
              <SongList />
            </table>
            <SongSortingPanel />
            <SongSelectionsPanel />
        </main>
      );
    
  }
