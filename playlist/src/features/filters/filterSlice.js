import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
    name:'filters',
    initialState: {
        genres:{
            metalSongArray:true,
            rockSongArray:true,
            bluesSongArray:true,
            classicalSongArray:true,
            jazzSongArray:true,
            popSongArray:true,
            fusionSongArray:true,
            soulSongArray:true,
            reggaeSongArray:true,
            skaSongArray:true,
            punkSongArray:true,
            grungeSongArray:true,
            elevatorSongArray:true,
            songArray:true
        },
        stars:{
            one:true,
            two:true,
            three:true,
            four:true,
            five:true,
        },
        options:"artistAZ",
    },
    reducers:{
        filterGenre: (state , genreInput) => {
            state.genres[genreInput.payload.name]= genreInput.payload.checked
        },
        filterStars: (state , starsInput) => {
            state.stars[starsInput.payload.name] = starsInput.payload.checked
        },
        sortOption: (state , option) => {
            state.options = option.payload
        }
    }
})

export const { filterGenre , filterStars ,sortOption} = filterSlice.actions;

export const selectGenre = state => state.filters.genres;

export const selectStars = state => state.filters.stars;

export const selectOptions = state => state.filters.options;

export default filterSlice.reducer;