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
            switch(del.payload.genre){
                case("metal"):
                    state.metalSongArray = state.metalSongArray.filter(( element ) =>( element.id )!== (del.payload.id) );
                    break;
                case("rock"):
                    state.rockSongArray = state.rockSongArray.filter(( element ) =>( element.id )!== (del.payload.id) );
                    break;
                case("blues"):
                    state.bluesSongArray = state.bluesSongArray.filter(( element ) =>( element.id )!== (del.payload.id) );
                    break;
                case("klassiek"):
                    state.klassiekSongArray = state.klassiekSongArray.filter(( element ) =>( element.id )!== (del.payload.id) );
                    break;
                case("jazz"):
                    state.jazzSongArray = state.jazzSongArray.filter(( element ) =>( element.id )!== (del.payload.id) );
                    break;
                case("pop"):
                    state.popSongArray = state.popSongArray.filter(( element ) =>( element.id )!== (del.payload.id) );
                    break;
                case("fusion"):
                    state.fusionSongArray = state.fusionSongArray.filter(( element ) =>( element.id )!== (del.payload.id) );
                    break;
                case("soul"):
                    state.soulSongArray = state.soulSongArray.filter(( element ) =>( element.id )!== (del.payload.id) );
                    break;               
                case("reggae"):
                    state.reggaeSongArray = state.reggaeSongArray.filter(( element ) =>( element.id )!== (del.payload.id) );
                    break;
                case("ska"):
                    state.skaSongArray = state.skaSongArray.filter(( element ) =>( element.id )!== (del.payload.id) );
                    break;
                case("punk"):
                    state.punkSongArray = state.punkSongArray.filter(( element ) =>( element.id )!== (del.payload.id) );
                    break;
                case("grunge"):
                    state.songArray = state.songArray.filter(( element ) =>( element.id )!== (del.payload.id) );
                    break;
                case("elevator"):
                    state.elevatorSongArray = state.elevatorSongArray.filter(( element ) =>( element.id )!== (del.payload.id) );
                    break;
                default:state.songArray = state.songArray.filter(( element ) =>( element.id )!== (del.payload.id) );
            }
            
        },
    }
})

export const { addSong , deleteSong } = songSlice.actions;

export const selectSongs = state => state.songs.songArray;
export const selectMetalSongs = state => state.songs.metalSongArray;
export const selectRockSongs = state => state.songs.rockSongArray;
export const selectBluesSongs = state => state.songs.bluesSongArray;
export const selectKlassiekSongs = state => state.songs.klassiekSongArray;
export const selectJazzSongs = state => state.songs.jazzSongArray;
export const selectPopSongs = state => state.songs.popSongArray;
export const selectFusionSongs = state => state.songs.fusionSongArray;
export const selectSoulSongs = state => state.songs.soulSongArray;
export const selectReggaeSongs = state => state.songs.reggaeSongArray;
export const selectSkaSongs = state => state.songs.skaSongArray;
export const selectPunkSongs = state => state.songs.punkSongArray;
export const selectGrungeSongs = state => state.songs.grungeSongArray;
export const selectElevatorSongs = state => state.songs.elevatorSongArray;

export default songSlice.reducer;