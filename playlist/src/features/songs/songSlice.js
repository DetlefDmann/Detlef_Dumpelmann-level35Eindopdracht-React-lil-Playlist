import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

export const songSlice = createSlice({
    name: 'songs',
    initialState: {
        songArray:[],
    },
    reducers: {
        addSong: {
            reducer:(state, newSong) => {
            state.songArray= [...state.songArray,newSong.payload];
        },
        prepare: (songToAdd) => {
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