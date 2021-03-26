import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

export const songSlice = createSlice({
    name: 'songs',
    initialState: {
        songArray:[],
        metalSongArray:[],
        rockSongArray:[],
        bluesSongArray:[],
        klassiekSongArray:[],
        jazzSongArray:[],
        popSongArray:[],
        fusionSongArray:[],
        soulSongArray:[],
        reggaeSongArray:[],
        skaSongArray:[],
        punkSongArray:[],
        grungeSongArray:[],
        elevatorSongArray:[],
    },
    reducers: {
        addSong: {
            reducer:(state, newSong) => {
                switch(newSong.payload.genre){
                    case("metal"):
                        state.metalSongArray= [...state.metalSongArray,newSong.payload];
                        break;
                    case("rock"):
                        state.rockSongArray= [...state.rockSongArray,newSong.payload];
                        break;
                    case("blues"):
                        state.bluesSongArray= [...state.bluesSongArray,newSong.payload];
                        break;
                    case("klassiek"):
                        state.klassiekSongArray= [...state.klassiekSongArray,newSong.payload];
                        break;
                    case("jazz"):
                        state.jazzSongArray= [...state.jazzSongArray,newSong.payload];
                        break;
                    case("pop"):
                        state.popSongArray= [...state.popSongArray,newSong.payload];
                        break;
                    case("fusion"):
                        state.fusionSongArray= [...state.fusionSongArray,newSong.payload];
                        break;
                    case("soul"):
                        state.soulSongArray= [...state.soulSongArray,newSong.payload];
                        break;
                    case("reggae"):
                        state.reggaeSongArray= [...state.reggaeSongArray,newSong.payload];
                        break;
                    case("ska"):
                        state.skaSongArray= [...state.skaSongArray,newSong.payload];
                        break;
                    case("punk"):
                        state.punkSongArray= [...state.punkSongArray,newSong.payload];
                        break;
                    case("grunge"):
                        state.grungeSongArray= [...state.grungeSongArray,newSong.payload];
                        break;
                    case("elevator"):
                        state.elevatorSongArray= [...state.elevatorSongArray,newSong.payload];
                        break;
                    default:
                        state.songArray= [...state.songArray,newSong.payload];
                        break;   
                }
        },
        prepare: (songToAdd) => {// dit is nodig omdat je anders geen uuid kunt gebruiken
            const id = uuid();
            return { payload: {...songToAdd, id} }
        },
        },
        deleteSong: (state, del) => {
            let newArr = state.songArray.filter(( element ) =>( element.id )!== (del.payload) );
            state.songArray = newArr;
        }
    }
})

export const { addSong , deleteSong } = songSlice.actions;

export const selectSongs = state => state.songs.songArray;

export default songSlice.reducer;