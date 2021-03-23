import { createSlice } from '@reduxjs/toolkit';

export const songSlice = createSlice({
    name: 'songs',
    initialState: {
        songArray:[],
    },
    reducers: {
        addSong: (state, newSong) => {
            state.songArray= [...state.songArray,newSong.payload];
        },
        deleteSong: (state, del) => {
            let newArr = state.songArray.filter(( element ) =>( element.id )!== parseInt(del.payload) );
            state.songArray = newArr;
        }
    }
})

export const { addSong , deleteSong } = songSlice.actions;

export const selectSongs = state => state.songs.songArray;

export default songSlice.reducer;