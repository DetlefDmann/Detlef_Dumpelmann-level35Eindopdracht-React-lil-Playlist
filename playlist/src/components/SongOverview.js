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
              <colgroup>
                <col className="song__column"/>
                <col className="artist__column"/>
                <col className="genre__column"/>
                <col className="rating__column"/>
                <col className="button__column"/>
              </colgroup>
              <thead>
                <tr className="song__header">
                  <th className="songRow__item">Song</th>
                  <th className="songRow__item">Artist</th>
                  <th className="songRow__item">Genre</th>
                  <th className="songRow__item">Rating</th>
                </tr>
              </thead>
              <SongList />
            </table>
            <SongSortingPanel />
            <SongSelectionsPanel />
        </main>
      );
    
  }
