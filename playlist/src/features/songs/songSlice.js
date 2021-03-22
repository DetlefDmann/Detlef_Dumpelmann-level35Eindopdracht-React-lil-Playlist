import { createSlice } from '@reduxjs/toolkit';

export const songSlice = createSlice({
    name: 'songs',
    initialState: {
        songArray:[
            
        ],
    },
    reducers: {
        addSong: (state, newSong) => {
            state.songArray.push(newSong.payload);
        }
    }
})

export const { addSong } = songSlice.actions;

export const selectSongs = state => state.songs.songArray;

export default songSlice.reducer;