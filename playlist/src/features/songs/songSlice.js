import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

export const songSlice = createSlice({
    name: 'songs',
    initialState: {
        songArray:[],
        metalSongArray:[{artistName: "Slayer",
        genre: "metal",
        id: "9719a93a-c607-4c9b-9919-7843535956ae",
        rating: "10",
        songTitle: "dittohead"}],
        rockSongArray:[{artistName: "U2",
        genre: "rock",
        id: "4b191b79-63fc-4184-a9d2-221f8275e5d2",
        rating: 9,
        songTitle: "Vertigo"}],
        bluesSongArray:[{artistName: "Gary Moore",
        genre: "blues",
        id: "693014a7-5b5f-4160-b6ab-96d004eafb4c",
        rating: 7,
        songTitle: "Still got the blues"}],
        klassiekSongArray:[{artistName: "Sergej Prokofjev",
        genre: "klassiek",
        id: "30f5aa6b-ed47-473f-b51c-d3ffc357a064",
        rating: 8,
        songTitle: "Montagues and Capulets"}],
        jazzSongArray:[{artistName: "Miles Davis",
        genre: "jazz",
        id: "7378c911-bb0f-419e-b54e-e853b7c774b4",
        rating: 1,
        songTitle: "Time after time"}],
        popSongArray:[{artistName: "Michael Jackson",
        genre: "pop",
        id: "28a4f1fe-eebc-4ec5-967b-bd9e83f0dac9",
        rating: 8,
        songTitle: "Beat it"}],
        fusionSongArray:[{artistName: "Snarky puppy",
        genre: "fusion",
        id: "2ca2c0e3-814d-4ef0-bdd6-593e00b18e0b",
        rating: 5,
        songTitle: "Lingus"}],
        soulSongArray:[{artistName: "Tower of power",
        genre: "soul",
        id: "43fbc7bb-b772-4708-9d86-150b82f35640",
        rating: "9",
        songTitle: 'Soul with a capital "S"'}],
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
                    state.metalSongArray = state.metalSongArray.filter(( element ) =>( element.id )!== (del.payload.id) );
                    state.rockSongArray = state.rockSongArray.filter(( element ) =>( element.id )!== (del.payload.id) );
                    state.bluesSongArray = state.bluesSongArray.filter(( element ) =>( element.id )!== (del.payload.id) );
                    state.klassiekSongArray = state.klassiekSongArray.filter(( element ) =>( element.id )!== (del.payload.id) );
                    state.jazzSongArray = state.jazzSongArray.filter(( element ) =>( element.id )!== (del.payload.id) );
                    state.popSongArray = state.popSongArray.filter(( element ) =>( element.id )!== (del.payload.id) );
                    state.fusionSongArray = state.fusionSongArray.filter(( element ) =>( element.id )!== (del.payload.id) );
                    state.soulSongArray = state.soulSongArray.filter(( element ) =>( element.id )!== (del.payload.id) );
                    state.reggaeSongArray = state.reggaeSongArray.filter(( element ) =>( element.id )!== (del.payload.id) );
                    state.skaSongArray = state.skaSongArray.filter(( element ) =>( element.id )!== (del.payload.id) );
                    state.punkSongArray = state.punkSongArray.filter(( element ) =>( element.id )!== (del.payload.id) );
                    state.songArray = state.songArray.filter(( element ) =>( element.id )!== (del.payload.id) );
                    state.elevatorSongArray = state.elevatorSongArray.filter(( element ) =>( element.id )!== (del.payload.id) );
                    state.songArray = state.songArray.filter(( element ) =>( element.id )!== (del.payload.id) );
            }
            
        },
    }
)

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