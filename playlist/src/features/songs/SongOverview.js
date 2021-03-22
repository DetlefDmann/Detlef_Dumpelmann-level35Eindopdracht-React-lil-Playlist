import React from 'react';
import SongForm from "./SongForm";
import SongList from "./SongList";

export const SongOverview = () => {
  // in songList word de state van songs in de store pas opgehaald:

  
    
 //addSong = (song) => doe iets om de state aan te passen
    
      return (
        <div>
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
                
        </div>
      );
    
  }
