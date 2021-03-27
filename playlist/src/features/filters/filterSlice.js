import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
    name:'filters',
    initialState: {
        genres:{
            metalSongArray:true,
            rockSongArray:true,
            bluesSongArray:true,
            klassiekSongArray:true,
            jazzSongArray:true,
            popSongArray:true,
            fusionSongArray:true,
            soulSongArray:true,
            reggaeSongArray:true,
            skaSongArray:true,
            punkSongArray:true,
            grungeSongArray:true,
            elevatorSongArray:true,
        },
        stars:{
            0:true,
            1:true,
            2:true,
            3:true,
            4:true,
            5:true,
        },
    },
    reducers:{
        filterGenre: (state , genrestate) => {
            
                state.genres[genrestate.payload.name]= genrestate.payload.checked
            
        },
        filterStars: (state , stars) => {
            return {...state,
                stars
            }
        }
    }
})

export const { filterGenre , filterStars } = filterSlice.actions;

export const selectGenre = state => state.filters.genres;

export const selectStars = state => state.filters.stars;

export default filterSlice.reducer;